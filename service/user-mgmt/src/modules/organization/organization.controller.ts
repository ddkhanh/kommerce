import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ObjectId, OrganizatioListResponse, OrganizationRequest, OrganizationResponse, SearchRequest} from '@kommerce/common';
import { OrganizationService } from './organization.service';
import { ValidationUtil } from '../../util/validation.util';
import * as Errors from '../../types/error'
import { OrganizationTransformer } from './transformer/organization.transformer';

@Controller()
export class OrganizationController {
  constructor(
    private readonly orgService: OrganizationService, 
    private readonly orgTrans: OrganizationTransformer) {}

  @GrpcMethod('OrganizationService', 'findOrgById')
  public async findOrgById (data: ObjectId): Promise<OrganizationResponse> {
    if(!ValidationUtil.isValidObjectId(data.id)) {
      throw Errors.InvalidIdException();
    }
    let inDb;
    if(data.id) {
      inDb = await this.orgService.findById(data.id);
    }
    if(!inDb) {
      throw Errors.NotFoundException();
    }
    return this.orgTrans.to(inDb);
  }

  @GrpcMethod('OrganizationService', 'createOrg')
  async createOrg (orgReq: OrganizationRequest): Promise<OrganizationResponse> {
    let orgRes = orgReq as OrganizationResponse;
    let org = this.orgTrans.from(orgRes);

    let orgDb = null;
    if(orgReq.name) {
      orgDb = await this.orgService.findOrgByName(orgReq.name) 
    }
    if(!orgDb) {
      let saved = await this.orgService.create(org);
      return this.orgTrans.to(saved);
    }
    throw Errors.AlreadyExistsException(`Organization ${orgReq.name} already existed`);
  }

  @GrpcMethod('OrganizationService', 'updateOrg')
  async updateOrg(orgRes: OrganizationResponse): Promise<OrganizationResponse> {
    let org = this.orgTrans.from(orgRes);

    let orgDb = await this.orgService.update(org)    
    if(!orgDb) {
      throw Errors.NotFoundException(`Organization ${org.name} do not existed`);
    }
    return this.orgTrans.to(orgDb);
  }

  @GrpcMethod('OrganizationService', 'searchOrgs')
  async searchOrgs (search: SearchRequest): Promise<OrganizatioListResponse>{
    let orgs = await this.orgService.findAll();
    return <OrganizatioListResponse>{
      orgs: orgs.map(o => this.orgTrans.to(o)),
      total: orgs.length
    };
  }  
}
