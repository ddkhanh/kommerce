import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/service/crud.service';
import { Organization } from './schema/organization.schema';

@Injectable()
export class OrganizationService extends CrudService<Organization>{

  constructor(@InjectModel(Organization.name) orgModel: Model<Organization>) {
    super(orgModel);
  }

  public async findOrgByName(name: string): Promise<Organization | null> {
    return await this.model.findOne({name: name}).exec();
  }

  protected getUniqueKey<K extends keyof Organization>(): K {
    return "id" as K;
  }
  
  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
