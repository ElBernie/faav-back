import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUser } from './dto/create-user.args';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UpdateUser } from './dto/update-user.args';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async users() {
    return this.usersService.getAll();
  }

  @Query(() => User)
  async user(@Args('id') id: number) {
    return this.usersService.getOne(id);
  }

  @Mutation(() => User)
  async userCreate(@Args() newUser: CreateUser) {
    return this.usersService.create(newUser);
  }

  @Mutation(() => User)
  async userUpdate(
    @Args('userData') userUpdateData: UpdateUser,
    @Args('id') id: number,
  ) {
    return this.usersService.update(id, userUpdateData);
  }

  @Mutation(() => User)
  async userDelete(@Args('id') id: number) {
    return this.usersService.delete(id);
  }
}
