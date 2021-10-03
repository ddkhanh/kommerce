import { GrpcOptions, Transport } from "@nestjs/microservices";
import { MongooseModuleOptions } from "@nestjs/mongoose";
import { join } from "path";

const PROTOBUF_PATH = join(__dirname, 'protobuf')

const mongoUri = ():string => {
    //mongodb://username:password@host:port/database
    let username = process.env.DB_USERNAME || 'root'
    let password = encodeURI(process.env.DB_PASSWORD || '123456')
    let dbHost = process.env.DB_HOST || 'localhost'
    let dbPort = process.env.DB_PORT || '27017'
    let dbName = process.env.DB_NAME || 'inventory'
    let uri = `mongodb://${username}:${password}@${dbHost}:${dbPort}/${dbName}`;
    console.log("MongoUri", uri);
    return uri;

}

export const apiOptions: GrpcOptions = {
    transport:  Transport.GRPC,    
    options: {
        package: 'inventory',
        protoPath: [
            PROTOBUF_PATH + "/product.proto", 
            PROTOBUF_PATH + "/asset.proto",
            PROTOBUF_PATH + "/category.proto"
        ],
        loader: {
            includeDirs: [PROTOBUF_PATH]
        }
    }
}

export const dbOptions: {uri: string, options: MongooseModuleOptions} = {
    uri: mongoUri(),
    options: {
        authSource: "admin"
    }
}