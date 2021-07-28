import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganizationService {
  findAll() {
    return `This action returns all organization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
