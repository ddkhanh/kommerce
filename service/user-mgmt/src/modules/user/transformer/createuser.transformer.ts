import { CreateUserDto, UserDto } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { AddressTransformer } from './address.transformer';
import { ProfileTransformer } from './profile.transformer';
import { Transformer } from '../../../transformer/tranformer';
import { User } from '../schema/user.schema';

@Injectable()
export class CreateUserTransformer implements Transformer<User, CreateUserDto>  {
    constructor(
        private readonly profileTrans: ProfileTransformer,
        private readonly addressTrans: AddressTransformer,
    ) {
    }
    fromDto(u: CreateUserDto): User {
        return <User>{
            userName: u.userName,
            password: u.password,
            addresss: u?.addresses?.map(e => this.addressTrans.fromDto(e)),
            profile: u.profile ? this.profileTrans.fromDto(u.profile) : null
        }
    }
    toDto(u: User): CreateUserDto {
        let userDto: CreateUserDto = {
            userName: u.userName,
            orgId: u.organization ? u.organization?.id.toString() : null,
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