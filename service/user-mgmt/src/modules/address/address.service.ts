import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/service/crud.service';
import { Address } from './schema/address.schema';

@Injectable()
export class AddressService extends CrudService<Address>{
  
  constructor(@InjectModel(Address.name) private addressModel: Model<Address>) {
    super(addressModel);
  }

  protected getUniqueKey<K extends keyof Address>(): K {
    return "id" as K;
  }
}
