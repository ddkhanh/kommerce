import { Injectable } from '@nestjs/common';
import { Transformer } from '../../../transformer/tranformer';
import { Organization } from '../schema/organization.schema';

@Injectable()
export class OrganizationTransformer implements Transformer<Organization, any>  {
    fromDto(dto: any): Organization {
        throw new Error('Method not implemented.');
    }
    toDto(doc: Organization) {
        throw new Error('Method not implemented.');
    }
}