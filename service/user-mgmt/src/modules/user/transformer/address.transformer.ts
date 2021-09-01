import { UserAddress } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { Transformer } from '../../../transformer/tranformer';
import { Address } from '../schema/address.schema';

@Injectable()
export class AddressTransformer implements Transformer<Address, UserAddress>  {
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
            id: addr.id.toString(),
            city: addr.city,
            country: addr.city,
            district: addr.district,
            state: addr.state,
            street: addr.street,
            ward: addr.ward
        }
    }        
}