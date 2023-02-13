import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserLink } from './dto/update-userlink.input';
import { Userlink } from './models/userlink.model';
import { UserlinkService } from './userlink.service';

@Resolver()
export class UserlinkResolver {
  constructor(private userlinksService: UserlinkService) {}

  @Query(() => [Userlink])
  userlinks() {
    return this.userlinksService.getAll();
  }

  @Query(() => Userlink)
  userlink(@Args('id') id: number) {
    return this.userlinksService.geOne(id);
  }

  @Mutation(() => Userlink)
  userlinkUpdate(@Args('id') id: number, @Args('data') data: UpdateUserLink) {
    return this.userlinksService.update(id, data);
  }

  @Mutation(() => Userlink)
  userlinkDelete(@Args('id') id: number) {
    return this.userlinksService.delete(id);
  }
}
