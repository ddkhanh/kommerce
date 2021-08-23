import { CreateUserDto, SearchUserDto, UserDto, UserId, UserListDto, UserResponse } from '@kommerce/common';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Types } from 'mongoose';
import { UserTransformer } from './transformer/user.transformer';
import { User } from './schema/user.schema';
import { UsersService } from './user.service';
import { CreateUserTransformer } from './transformer/createuser.transformer';

@Controller()
export class UserController {
  constructor(
    private readonly usersService: UsersService,
    private readonly userTrans: UserTransformer,
    private readonly createuserTrans: CreateUserTransformer,
  ) { }

  @GrpcMethod('UserService', 'getUser')
  public async getUser(userId: UserId): Promise<UserResponse> {
    if (!userId.id || !Types.ObjectId.isValid(userId.id)) {
      return <UserResponse>{
        error: {
          message: 'Invalid user id',
          errorCode: 400
        }
      }
    }
    let user;
    if (userId.id) {
      user = await this.usersService.findOne(userId.id)
    }
    return <UserResponse>{
      result: this.userTrans.toDto(user as User)
    }
  }

  @GrpcMethod('UserService', 'searchUsers')
  public async searchUsers(searches: SearchUserDto): Promise<UserListDto> {
    let users = await this.usersService.findAll()
    return <UserListDto>{
      total: users.length,
      users: users.map(e => this.userTrans.toDto(e))
    };
  }

  @GrpcMethod('UserService', 'createUser')
  public async createUser(usr: CreateUserDto): Promise<UserResponse> {
    let user: User = this.createuserTrans.fromDto(usr);
    if (this.usersService.findByUserName(user.userName)) {
      return <UserResponse>{
        error: {
          message: `The user ${user.userName} is already existed!`,
          errorCode: 409
        }
      }
    }
    let created = await this.usersService.createOrUpdate(user);
    return <UserResponse>{
      result: this.createuserTrans.toDto(created)
    }
  }
}
