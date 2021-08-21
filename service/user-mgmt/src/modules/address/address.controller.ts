import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  create() {
    return 'Dummy';
  }

  findAll() {
    return 'Dummy';
  }

  findOne( id: string) {
    return 'Dummy';
  }

  update() {
    return 'Dummy';
  }

  remove(id: string) {
    return 'Dummy';
  }
}
