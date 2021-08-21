import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/service/crud.service';
import { Profile } from './schema/profile.schema';

@Injectable()
export class ProfileService extends CrudService<Profile> {

  constructor(
    @InjectModel(Profile.name) private readonly profileModel: Model<Profile>
  ){
    super(profileModel);
  }
  
  protected getUniqueKey<K extends keyof Profile>(): K {
    return "id" as K;
  }

  create() {
    return 'This action adds a new profile';
  }

  update(id: number) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
