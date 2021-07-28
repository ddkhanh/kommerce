
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DBEntity } from "../../entities/generic.entity";
import { User } from "./user.entity";

@Entity()
export class Address extends DBEntity {
    @Column()
    street: string;

    @Column()
    ward: string;

    @Column()
    district: string;
    
    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @ManyToOne(()=>User)
    @JoinColumn()
    user: User;  
}

