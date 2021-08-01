import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './user.service';
import { UserId, UserDto , UserListDto, SearchRequest } from '@kommerce/common';
import { User } from './entities/user.entity';
import { DtoTransformer } from './dto/transformer';

@Controller()
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UserService', 'getUser')
  public async getUser(id: UserId): Promise<UserDto> {  
    let user;
    if(id.id) {
      user = await this.usersService.findOne(id.id);
    }
    return DtoTransformer.toUserDto(user as User)
  }

  @GrpcMethod('UserService', 'searchUsers')
  public async searchUsers(searches: SearchRequest): Promise<UserListDto> {  
    let users:User[] = await this.usersService.findAll();
   
    let result: UserListDto = {
      total: users.length,
      users: users.map(e => DtoTransformer.toUserDto(e))
    }    
    return result;
  } 
}
