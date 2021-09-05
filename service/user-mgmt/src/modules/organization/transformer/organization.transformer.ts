import { Injectable } from '@nestjs/common';
import { ObjectId, OrganizationRequest, OrganizationResponse} from '../../../protobuf/user';
import { Transformer } from '@kommerce/common';
import { Organization } from '../schema/organization.schema';

@Injectable()
export class OrganizationTransformer implements Transformer<Organization, OrganizationResponse>  {
    from(o: OrganizationResponse): Organization {
        return <Organization> {
            name: o.name,
            description: o.description,
            _id: o.id,
            id: o.id
        }
    }
    to(o: Organization): OrganizationResponse {
        return <OrganizationResponse> {
            name: o.name,
            description: o.description,
            id: o._id.toString(),
            uperOrgId: o.upperOrg?.id,
            updatedAt: o.updatedAt.getTime(),
            createdAt: o.createdAt.getTime()
        }
    }
}