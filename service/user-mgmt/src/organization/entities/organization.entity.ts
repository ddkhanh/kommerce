
import { User } from "../../user/entities/user.entity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Kentity } from "../../entities/generic.entity";

@Entity()
export class Organization extends Kentity{
    @Column()
    name: string;
    @Column()
    description: string;

    @ManyToOne(()=>Organization, {
        nullable: true
    })
    uperOrg: Organization;
}
