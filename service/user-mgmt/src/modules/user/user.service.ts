import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from '../../service/crud.service';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService extends CrudService<User>{
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>
  ) {
    super(userModel);
  }

  protected getUniqueKey<K extends keyof User>(): K {
    return "userName" as K;
  }
}
