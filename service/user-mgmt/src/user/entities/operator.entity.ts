import { Organization } from "../../organization/entities/organization.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { Kentity } from "../../entities/generic.entity";
import { User } from "./user.entity";

@Entity()
export class Operator extends Kentity {
    @OneToOne(()=>User)
    @JoinColumn()
    user: User

    @ManyToMany(()=>Organization)
    @JoinTable()
    orgsManagement: Organization[]
}