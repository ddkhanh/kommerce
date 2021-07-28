
import { User } from "../../user/entities/user.entity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { DBEntity } from "../../entities/generic.entity";

@Entity()
export class Organization extends DBEntity{
    @Column()
    name: string;
    @Column()
    description: string;

    @ManyToOne(()=>Organization, {
        nullable: true
    })
    uperOrg: Organization;
}
