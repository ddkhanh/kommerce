import { Controller } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Controller()
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  findAll() {
  }

  findOne() {
  }

  remove() {
  }
}
