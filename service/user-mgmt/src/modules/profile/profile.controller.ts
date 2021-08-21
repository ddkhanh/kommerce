import { Controller } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  create() {
    return 'Dummy';
  }

  findAll() {
    return 'Dummy';
  }

  findOne() {
    return 'Dummy';
  }

  update() {
    return 'Dummy';
  }

  remove() {
    return 'Dummy';
  }
}
