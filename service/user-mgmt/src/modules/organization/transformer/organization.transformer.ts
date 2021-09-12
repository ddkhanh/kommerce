import { Transformer } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { OrganizationRequest, OrganizationResponse } from '../../../protobuf/user';
import { Organization } from '../schema/organization.schema';

@Injectable()
export class OrganizationTransformer implements Transformer<OrganizationRequest, OrganizationResponse, Organization>  {
    from(o: OrganizationRequest): Organization {
        return <Organization>{
            name: o.name,
            description: o.description,
        }
    }
    to(o: Organization): OrganizationResponse {
        return <OrganizationResponse>{
            name: o.name,
            description: o.description,
            id: o.id,
            uperOrgId: o.upperOrg?.id,
            updatedAt: o.updatedAt.getTime(),
            createdAt: o.createdAt.getTime()
        }
    }
}