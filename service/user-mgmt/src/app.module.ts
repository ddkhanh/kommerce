import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbOptions } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbOptions),
    UserModule, 
    OrganizationModule
  ],
})
export class AppModule {}
