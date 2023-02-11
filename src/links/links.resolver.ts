import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { LinksService } from './links.service';
import { Link } from './models/link.model';

@Resolver()
export class LinksResolver {
  constructor(private linksService: LinksService) {}

  @Query(() => [Link])
  async links() {
    return this.linksService.getAll();
  }

  @Query(() => Link)
  async link(@Args('id') id: number) {
    return this.linksService.get(id);
  }

  @Mutation(() => Link)
  async linkCreate(@Args('url') url: string) {
    return this.linksService.create(url);
  }

  @Mutation(() => Link)
  async linkDelete(@Args('id') id: number) {
    return this.linksService.delete(id);
  }
}
