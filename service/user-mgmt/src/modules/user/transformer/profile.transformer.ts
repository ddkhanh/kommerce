import { AddressDto, ProfileDto, UserDto } from '@kommerce/common';
import { Address } from '../schema/address.schema';
import { Profile } from '../schema/profile.schema';
import { User } from '../schema/user.schema';
import { Transformer } from '../../../transformer/tranformer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileTransformer implements Transformer<Profile, ProfileDto> {
    fromDto(p: ProfileDto): Profile {
        return <Profile> {
            lastName: p.lastName,
            firstName: p.firstName,
            gender: p.gender,
            phone: p.phone,
            photo: p.photo
       };
    }
    toDto(p: Profile): ProfileDto {
        return <ProfileDto> {
            gender: p.gender,
            phone: p.phone,
            firstName: p.firstName,
            lastName: p.lastName,
            dateOfBirth: p.dateOfBirth?.getTime(),
            photo: p.phone
        }
    }    
}