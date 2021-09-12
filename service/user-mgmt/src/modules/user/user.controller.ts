import { LoginRequest, ObjectId, SearchRequest, UserListResponse, UserOrgRequest, UserRequest, UserResponse, UserServiceController, UserServiceControllerMethods } from '../../protobuf/user';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import * as Errors from '@kommerce/common';
import { OrganizationService } from '../organization/organization.service';
import { ValidationUtil } from '../../util/validation.util';
import { User } from './schema/user.schema';
import { UserTransformer } from './transformer/user.transformer';
import { UsersService } from './user.service';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController{
  constructor(
    private readonly usersService: UsersService,
    private readonly userTrans: UserTransformer,
    private readonly orgService: OrganizationService
  ) { }

  public async findUserById(data: ObjectId): Promise<UserResponse> {
    if (!ValidationUtil.isValidObjectId(data.id)) {
      throw Errors.InvalidIdException();
    }
    let user = await this.usersService.findById(data.id)
    if(!user) {
      throw Errors.NotFoundException(`User ${data.id} do not existing`)
    }
    return this.userTrans.to(user);
  }

  public async searchUsers(searches: SearchRequest): Promise<UserListResponse> {
    let filter:any = {};
    searches.criterias?.forEach(q => {
      if(q.name) {
        filter[q.name] = q.value
      }
    })
    let users = await this.usersService.findBy(filter);
    return <UserListResponse>{
      total: users.length,
      users: users.map(e => this.userTrans.to(e))
    };
  }

  public async signUp(usr: UserRequest): Promise<UserResponse> {
    let user: User = this.userTrans.from(usr);
    let dbUser = await this.usersService.findByUserName(user.userName);
    if (dbUser) {      
      throw Errors.AlreadyExistsException(`The user ${user.userName} is already existed!`)
    }
    let created = await this.usersService.create(user);
    return this.userTrans.to(created)
  }


  public async updateUser(usr: UserResponse): Promise<UserResponse> {
    let user: User = this.userTrans.from(usr);
    let created = await this.usersService.update(user);
    if (!created) {      
      throw Errors.NotFoundException(`User id ${user.id} is not existed`)
    }
    return this.userTrans.to(created)
  }


  @GrpcMethod('UserService', 'addUserToOrg')
  public async addUserToOrg(usrOrg: UserOrgRequest): Promise<UserResponse> {
    if(!ValidationUtil.isValidObjectId(usrOrg.orgId) || !ValidationUtil.isValidObjectId(usrOrg.userId)) {
      throw Errors.InvalidIdException()
    }
    let org = await this.orgService.findById(usrOrg.orgId)
    if(!org) {
      throw Errors.NotFoundException(`Organization ${usrOrg.orgId} do not existing`)
    }
    let user = <User> {
      id: usrOrg.userId,
      organization: org
    }
    let saved = await this.usersService.update(user);
    if (!saved) {
      throw Errors.NotFoundException(`User ${usrOrg.userId} do not existing`)
    }
    return this.userTrans.to(saved);
  }

  public async signIn(loginRequest: LoginRequest): Promise<UserResponse> {
    let user = await this.usersService.findByUserName(loginRequest.userName)
    if(user?.comparePassword(loginRequest.password)) {
      return this.userTrans.to(user);
    }
    throw Errors.NotFoundException(`The user ${loginRequest.userName} with matching password is not found`)
  }
}
