import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Parent,
} from '@nestjs/graphql';
import { User } from 'src/auth/decorators/user.decorator';
import { GraphGuard } from 'src/auth/guards/Graph.guard';

import { CreateUserlink } from './dto/create-userlink.args';
import { UpdateUserLink } from './dto/update-userlink.input';
import { Userlink } from './models/userlink.model';
import { UserlinkService } from './userlink.service';

@Resolver(() => Userlink)
export class UserlinkResolver {
  constructor(private userlinksService: UserlinkService) {}

  @Query(() => [Userlink])
  async userlinks() {
    return this.userlinksService.getAll();
  }

  @Query(() => Userlink)
  async userlink(@Args('id') id: number) {
    return this.userlinksService.getOne(id);
  }

  @Mutation(() => Userlink)
  @UseGuards(GraphGuard)
  async userlinkCreate(@User() user: any, @Args() data: CreateUserlink) {
    return this.userlinksService.create({
      ...data,
      creator: user.id || data.creator,
    });
  }

  @Mutation(() => Userlink)
  async userlinkUpdate(
    @Args('id') id: number,
    @Args('data') data: UpdateUserLink,
  ) {
    return this.userlinksService.update(id, data);
  }

  @Mutation(() => Userlink)
  async userlinkDelete(@Args('id') id: number) {
    return this.userlinksService.delete(id);
  }

  @ResolveField()
  async link(@Parent() userLink: Userlink) {
    return this.userlinksService.getLink(userLink.id);
  }

  @ResolveField('creator')
  async creator(@Parent() userLink: Userlink) {
    return this.userlinksService.getCreator(userLink.id);
  }

  @ResolveField('space')
  async space(@Parent() userLink: Userlink) {
    return this.userlinksService.getSpace(userLink.id);
  }

  @ResolveField('folder')
  async folder(@Parent() userLink: Userlink) {
    return this.userlinksService.getFolder(userLink.id);
  }
}
