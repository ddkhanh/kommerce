import { MongooseModuleOptions } from "@nestjs/mongoose";
import { join } from "path";
import { ApiOptions } from "./option/api.option";

const PROTOBUF_PATH = join(__dirname, 'protobuf')

const mongoUri = ():string => {
    //mongodb://username:password@host:port/database
    let username = process.env.DB_USERNAME || 'root'
    let password = encodeURI(process.env.DB_PASSWORD || '123456')
    let dbHost = process.env.DB_HOST || 'mongo'
    let dbPort = process.env.DB_PORT || '27017'
    let dbName = process.env.DB_NAME || 'user'
    let uri = `mongodb://${username}:${password}@${dbHost}:${dbPort}/${dbName}`;
    console.log("MongoUri", uri);
    return uri;

}

export const apiOptions: ApiOptions = {
    hostname: process.env.HOSTNAME || 'localhost',
    port: parseInt(process.env.PORT || "5000"),
    package: 'usermgmt',
    schemaPath: PROTOBUF_PATH + "/user.proto"
}

export const dbOptions: {uri: string, options: MongooseModuleOptions} = {
    uri: mongoUri(),
    options: {
        authSource: "admin"
    }
}