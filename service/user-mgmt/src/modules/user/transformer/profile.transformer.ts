import { UserProfile } from '../../../protobuf/user';
import { Injectable } from '@nestjs/common';
import { Transformer } from '@kommerce/common';
import { Profile } from '../schema/profile.schema';

@Injectable()
export class ProfileTransformer implements Transformer<UserProfile, UserProfile, Profile> {
    from(p: UserProfile): Profile {
        return <Profile> {
            lastName: p.lastName,
            firstName: p.firstName,
            gender: p.gender,
            phone: p.phone,
            photo: p.photo
       };
    }
    to(p: Profile): UserProfile {
        return <UserProfile> {
            gender: p.gender,
            phone: p.phone,
            firstName: p.firstName,
            lastName: p.lastName,
            dateOfBirth: p.dateOfBirth?.getTime(),
            photo: p.phone
        }
    }    
}