import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization, OrganizationSchema } from './schema/organization.schema';
import { OrganizationTransformer } from './transformer/organization.transformer';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Organization.name, schema: OrganizationSchema}
    ])
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationTransformer],
  exports: [OrganizationService]
})
export class OrganizationModule {}
