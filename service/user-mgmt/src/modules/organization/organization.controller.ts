import { Controller } from '@nestjs/common';
import { ObjectId, OrganizatioListResponse, OrganizationRequest, OrganizationResponse, OrganizationServiceController, OrganizationServiceControllerMethods, SearchRequest, UpperOrgRequest } from '../../protobuf/user';
import * as Errors from '@kommerce/common';
import { ValidationUtil } from '../../util/validation.util';
import { OrganizationService } from './organization.service';
import { OrganizationTransformer } from './transformer/organization.transformer';

@Controller()
@OrganizationServiceControllerMethods()
export class OrganizationController implements OrganizationServiceController {
  constructor(
    private readonly orgSvc: OrganizationService,
    private readonly orgTrans: OrganizationTransformer) { }

  public async findOrgById(data: ObjectId): Promise<OrganizationResponse> {
    if (!ValidationUtil.isValidObjectId(data.id)) {
      throw Errors.InvalidIdException();
    }
    let inDb = await this.orgSvc.findById(data.id);
    if (!inDb) {
      throw Errors.NotFoundException();
    }
    return this.orgTrans.to(inDb);
  }

  async createOrg(orgReq: OrganizationRequest): Promise<OrganizationResponse> {
    let org = this.orgTrans.from(orgReq);

    let orgDb = await this.orgSvc.findOrgByName(orgReq.name)
    if (!orgDb) {
      let saved = await this.orgSvc.create(org);
      return this.orgTrans.to(saved);
    }
    throw Errors.AlreadyExistsException(`Organization ${orgReq.name} already existed`);
  }

  async updateOrg(orgRes: OrganizationResponse): Promise<OrganizationResponse> {
    let org = this.orgTrans.from(orgRes);

    let orgDb = await this.orgSvc.update(org)
    if (!orgDb) {
      throw Errors.NotFoundException(`Organization ${org.name} do not existed`);
    }
    return this.orgTrans.to(orgDb);
  }

  async setUpperOrg(orgReq: UpperOrgRequest): Promise<OrganizationResponse> {
    if (!ValidationUtil.isValidObjectId(orgReq.orgId) || !ValidationUtil.isValidObjectId(orgReq.upperOrgId)) {
      throw Errors.InvalidIdException();
    }
    let org, upperOrg;
    //TODO: query these 2 orgs at one shoot
    org = await this.orgSvc.findById(orgReq.orgId);
    upperOrg = await this.orgSvc.findById(orgReq.upperOrgId);
    if (org && upperOrg) {
      org.upperOrg = upperOrg;
      org = await this.orgSvc.update(org)
      
    } else {
        throw Errors.NotFoundException(`Org ${orgReq.orgId} or ${orgReq.upperOrgId} is not found`)
    }
    if(org) {
      return this.orgTrans.to(org);
    }
    throw new Errors.KommerceException('Internal error, cannot persit data');
  }

  async searchOrgs(search: SearchRequest): Promise<OrganizatioListResponse> {
    let orgs = await this.orgSvc.findAll();
    return <OrganizatioListResponse>{
      orgs: orgs.map(o => this.orgTrans.to(o)),
      total: orgs.length
    };
  }
}
