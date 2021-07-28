import { Organization } from "../../organization/entities/organization.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { DBEntity } from "../../entities/generic.entity";
import { User } from "./user.entity";

@Entity()
export class Operator extends DBEntity {
    @OneToOne(()=>User)
    @JoinColumn()
    user: User

    @ManyToMany(()=>Organization)
    @JoinTable()
    orgsManagement: Organization[]
}