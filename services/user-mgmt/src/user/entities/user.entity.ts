
import { Organization } from "../../organization/entities/organization.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { DBEntity } from "../../entities/generic.entity";
import { Address } from "./address.entity";
import { Profile } from "./profile.entity";

@Entity()
export class User extends DBEntity {
    @Column()
    userName: string;
    
    @Column()
    password: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    @OneToMany(()=>Address, address => address.user)
    addresss: Address[];

    @Column('simple-array')
    permissions: string[];

    @ManyToOne(() => Organization, {
        nullable: true
    })
    @JoinColumn()
    organization: Organization; 
}