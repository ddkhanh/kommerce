import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Controller()
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @MessagePattern('createOrganization')
  create(@Payload() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }

  @MessagePattern('findAllOrganization')
  findAll() {
    return this.organizationService.findAll();
  }

  @MessagePattern('findOneOrganization')
  findOne(@Payload() id: number) {
    return this.organizationService.findOne(id);
  }

  @MessagePattern('updateOrganization')
  update(@Payload() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationService.update(updateOrganizationDto.id, updateOrganizationDto);
  }

  @MessagePattern('removeOrganization')
  remove(@Payload() id: number) {
    return this.organizationService.remove(id);
  }
}
