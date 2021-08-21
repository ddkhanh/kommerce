import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/service/crud.service';
import { Organization } from './schema/organization.schema';

@Injectable()
export class OrganizationService extends CrudService<Organization>{

  constructor(@InjectModel(Organization.name) private readonly orgModel: Model<Organization>) {
    super(orgModel);
  }

  protected getUniqueKey<K extends keyof Organization>(): K {
    return "id" as K;
  }
  
  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
