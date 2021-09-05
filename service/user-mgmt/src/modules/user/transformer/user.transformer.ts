import { UserResponse } from '../../../protobuf/user';
import { Injectable } from '@nestjs/common';
import { Transformer } from '@kommerce/common';
import { User } from '../schema/user.schema';
import { AddressTransformer } from './address.transformer';
import { ProfileTransformer } from './profile.transformer';

@Injectable()
export class UserTransformer implements Transformer<User, UserResponse>  {
    constructor(
        private readonly profileTrans: ProfileTransformer,
        private readonly addressTrans: AddressTransformer,
    ) {
    }
    from(u: UserResponse): User {       
        let user = <User>{
            userName: u.userName,
            password: u.password,
        }
        if(u.id) {
            user._id = u.id;
            user.id = u.id;
        }
        if(u.orgId) {
            // userRespone.orgId = u.organization.id
        }
        if(u.profile) {
            user.profile = this.profileTrans.from(u.profile)
        }
        if(u.addresses?.length) {
            user.addresses = u.addresses.map(e => this.addressTrans.from(e))
        }
        return user;
    }
    to(u: User): UserResponse {      
        let userRespone = <UserResponse>{
            id: u._id.toString(),
            userName: u.userName,
            password: u.password.replace(/./g, '*'),
            createdAt: u.createdAt.getTime(),
            updatedAt: u.updatedAt.getTime()
        };
        
        if(u.organization) {
            userRespone.orgId = u.organization._id.toString()
        }
        if(u.profile) {
            userRespone.profile = this.profileTrans.to(u.profile)
        }
        if(u.addresses?.length) {
            userRespone.addresses = u.addresses.map(e => this.addressTrans.to(e))
        }
        return userRespone;
    }    
}