import { User } from '../entities/user.entity'
import { Profile } from '../entities/profile.entity';
import { Address } from '../entities/address.entity'
import { UserDto } from '@kommerce/common';
import { AddressDto } from '@kommerce/common';
import { ProfileDto } from '@kommerce/common';

export class DtoTransformer  {
    public static toUserDto(u: User): UserDto {
        let userDto:UserDto = {
            userName: u.userName,
            orgId: u.organization.id,
            id: u.id           
        }
        if(u.profile) {
            userDto.profile = this.toProfileDto(u.profile)
        }
        if(u.addresss.length > 0) {            
            userDto.addresses = u.addresss.map(e => this.toAddressDto(e));
        }
        return userDto;
    }

    public static toAddressDto(addr: Address): AddressDto { 
        return <AddressDto> {
            id: addr.id,
            city: addr.city,
            country: addr.city,
            district: addr.district,
            state: addr.state,
            street: addr.street,
            ward: addr.ward
        }
    }

    public static toProfileDto(p: Profile): ProfileDto {
        return <ProfileDto> {
            id: p.id,
            gender: p.gender,
            phone: p.phone,
            firstName: p.firstName,
            lastName: p.lastName,
            dateOfBirth: p.dateOfBirth.getTime(),
            photo: p.phone
        }
    }
}