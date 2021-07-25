import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './user.service';
import { UserId, User, Users, SearchRequest } from '@lib/common';

@Controller()
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UserService', 'getUser')
  getUser(id: UserId): User {  
    return {id:1, name: "test"}
  }

  @GrpcMethod('UserService', 'searchUsers')
  async searchUsers(searches: SearchRequest): Promise<Users> {  
    let users:User[] = await this.usersService.findAll();
    let result: Users = {
      total: users.length,
      users: users
    }    
    return result;
  } 
}
