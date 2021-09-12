export class KommerceDocument{
    /** objectId storing in Mongo */
    id: string

    /** To be injected by mongoose */
    createdAt: Date;

    /** To be injected by mongoose */
    updatedAt: Date;
}