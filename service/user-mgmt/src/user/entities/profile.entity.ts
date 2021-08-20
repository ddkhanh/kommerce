
import { Column, Entity } from "typeorm";
import { Kentity } from "../../entities/generic.entity";

export enum Gender {
    FEMALE = "female",
    MALE = "male",
    UNKNOWN = "unknown"
}

@Entity()
export class Profile extends Kentity {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.UNKNOWN
    })
    gender: string;

    @Column()
    photo: string;

    @Column()
    dateOfBirth: Date;
}

