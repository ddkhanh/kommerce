import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressTransformer } from './transformer/address.transformer';
import { ProfileTransformer } from './transformer/profile.transformer';
import { Operator, OperatorSchema } from './schema/operator.schema';
import { User, UserSchema } from './schema/user.schema';
import { UserTransformer } from './transformer/user.transformer';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { CreateUserTransformer } from './transformer/createuser.transformer';

@Module({
  imports: [MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Operator.name, schema: OperatorSchema },
  ])],  
  controllers: [UserController],
  providers: [UsersService, UserTransformer, AddressTransformer, ProfileTransformer, CreateUserTransformer]
})
export class UserModule {}
