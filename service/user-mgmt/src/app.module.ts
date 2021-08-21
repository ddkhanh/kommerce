import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressModule } from './modules/address/address.module';
import { dbOptions } from './config';
import { OrganizationModule } from './modules/organization/organization.module';
import { ProfileModule } from './modules/profile/profile.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(dbOptions.uri, dbOptions.options),
    UserModule, 
    OrganizationModule, ProfileModule, AddressModule
  ],
})
export class AppModule {}
