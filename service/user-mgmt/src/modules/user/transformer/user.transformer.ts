import { UserDto } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { AddressTransformer } from '../../address/transformer/address.transformer';
import { ProfileTransformer } from '../../profile/transformer/profile.transformer';
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
            userName: u.userName,
            password: u.password,
            addresss: u?.addresses?.map(e => this.addressTrans.fromDto(e)),
            profile: u.profile ? this.profileTrans.fromDto(u.profile) : null
        }
    }
    toDto(u: User): UserDto {
        let userDto: UserDto = {
            userName: u.userName,
            orgId: u.organization ? u.organization.id.toString() : null,
            id: u.id.toString()
        }
        if (u.profile) {
            userDto.profile = this.profileTrans.toDto(u.profile)
        }
        if (u.addresss) {
            userDto.addresses = u?.addresss.map(e => this.addressTrans.toDto(e));
        }
        return userDto;
    }    
}