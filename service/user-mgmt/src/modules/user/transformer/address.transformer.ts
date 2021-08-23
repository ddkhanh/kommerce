import { AddressDto } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { Transformer } from '../../../transformer/tranformer';
import { Address } from '../schema/address.schema';

@Injectable()
export class AddressTransformer implements Transformer<Address, AddressDto>  {
    fromDto(a: AddressDto): Address {
        return <Address> {
            city: a.city,
            state: a.state,
            country: a.country,
            street: a.street,
            district: a.district
        };
    }
    toDto(addr: Address): AddressDto {
        return <AddressDto> {
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