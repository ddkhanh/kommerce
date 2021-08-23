import { UserDto } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { AddressTransformer } from './address.transformer';
import { ProfileTransformer } from './profile.transformer';
import { Transformer } from '../../../transformer/tranformer';
import { User } from '../schema/user.schema';

@Injectable()
export class UserTransformer implements Transformer<User, UserDto>  {
    constructor(
        private readonly profileTrans: ProfileTransformer,
        private readonly addressTrans: AddressTransformer,
    ) {
    }
    fromDto(u: UserDto): User {
        return <User>{
            _id: u.id,
            userName: u.userName,
            password: u.password,
            addresss: u?.addresses?.map(e => this.addressTrans.fromDto(e)),
            profile: u.profile ? this.profileTrans.fromDto(u.profile) : null
        }
    }
    toDto(u: User): UserDto {      
        return <UserDto>{
            userName: u.userName,
            orgId: u.organization?.id?.toString(),
            id: u.id?.toString(),
            profile: this.profileTrans.toDto(u.profile),
            addresses: u?.addresss.map(e => this.addressTrans.toDto(e))
        };
    }    
}