import { SearchRequest, UserDto, UserId, UserListDto } from '@kommerce/common';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Types } from 'mongoose';
import { UserTransformer } from './transformer/user.transformer';
import { User } from './schema/user.schema';
import { UsersService } from './user.service';

@Controller()
export class UserController {
  constructor(
    private readonly usersService: UsersService,
    private readonly userTrans: UserTransformer
    ) {}

  @GrpcMethod('UserService', 'getUser')
  public async getUser(userId: UserId): Promise<UserDto> {  
    if(!userId.id || !Types.ObjectId.isValid(userId.id)) {
      return this.userTrans.toDto({id: 'Not found', userName: 'Not Found', organization: {id: 'Not Found'}} as User)
    }
    let user;
    if(userId.id) {
      user = await this.usersService.findOne(userId.id)
    }
    return this.userTrans.toDto(user as User)
  }

  @GrpcMethod('UserService', 'searchUsers')
  public async searchUsers(searches: SearchRequest): Promise<UserListDto> {  
    let users:User[] = await this.usersService.findAll()
   
    let result: UserListDto = {
      total: users.length,
      users: users.map(e => this.userTrans.toDto(e))
    }    
    return result;
  } 

  @GrpcMethod('UserService', 'createUser')
  public async createUser(usr: UserDto): Promise<UserDto> { 
    let user:User = this.userTrans.fromDto(usr);     
   
    let created = await this.usersService.createOrUpdate(user);
    return this.userTrans.toDto(created);
  } 
}
