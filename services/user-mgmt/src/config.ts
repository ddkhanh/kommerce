import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { ApiOptions } from "./option/api.option"
import { Organization } from "./organization/entities/organization.entity"
import { Address } from "./user/entities/address.entity"
import { Operator } from "./user/entities/operator.entity"
import { Profile } from "./user/entities/profile.entity"
import { User } from "./user/entities/user.entity"
import { PROTOBUF_PATH } from '@lib/common';

export const apiOptions: ApiOptions = {
    hostname: process.env.HOSTNAME || 'localhost',
    port: parseInt(process.env.PORT || "5000"),
    package: 'user',
    schemaPath: PROTOBUF_PATH + "/user.proto"
}

export const dbOptions: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || "192.168.56.101",
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_DBNAME || 'user',
    synchronize: true,
    entities: [Profile, Address, Organization, User, Operator]
}

