import { UserAddress } from '../../../protobuf/user';
import { Injectable } from '@nestjs/common';
import { Transformer } from '@kommerce/common';
import { Address } from '../schema/address.schema';

@Injectable()
export class AddressTransformer implements Transformer<Address, UserAddress, Address>  {
    from(a: UserAddress): Address {
        return <Address> {
            city: a.city,
            state: a.state,
            country: a.country,
            street: a.street,
            district: a.district
        };
    }
    to(addr: Address): UserAddress {
        return <UserAddress> {
            id: addr.id,
            city: addr.city,
            country: addr.city,
            district: addr.district,
            state: addr.state,
            street: addr.street,
            ward: addr.ward
        }
    }        
}