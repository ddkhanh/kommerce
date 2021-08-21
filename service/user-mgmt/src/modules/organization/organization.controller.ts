import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrganizationService } from './organization.service';

@Controller()
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @MessagePattern('findAllOrganization')
  findAll() {
    return this.organizationService.findAll();
  }

  @MessagePattern('findOneOrganization')
  findOne(@Payload() id: number) {
    return this.organizationService.findOne(id);
  }

  @MessagePattern('removeOrganization')
  remove(@Payload() id: number) {
    return this.organizationService.remove(id);
  }
}
