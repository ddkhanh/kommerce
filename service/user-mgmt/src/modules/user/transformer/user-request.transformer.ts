import { UserRequest, UserResponse } from '../../../protobuf/user';
import { Injectable } from '@nestjs/common';
import { Transformer } from '@kommerce/common';
import { User } from '../schema/user.schema';
import { UserTransformer } from './user.transformer';

@Injectable()
export class UserRequestTransformer implements Transformer<User, UserRequest>  {
    constructor(
        private readonly userTrans: UserTransformer,
    ) {
    }
    from(u: UserRequest): User {
        let userRes: UserResponse = u as UserResponse;
        return this.userTrans.from(userRes);
    }
    to(u: User): UserRequest {
        let userRes = this.userTrans.to(u);
        return userRes as UserRequest;
    }
}