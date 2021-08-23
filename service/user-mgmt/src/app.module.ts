import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbOptions } from './config';
import { OrganizationModule } from './modules/organization/organization.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(dbOptions.uri, dbOptions.options),
    UserModule, OrganizationModule
  ],
})
export class AppModule {}
