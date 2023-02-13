import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { CreateSpace } from './dto/create-space.args';
import { UpdateSpace } from './dto/update-space.args';
import { Space } from './models/space.model';
import { SpacesService } from './spaces.service';

@Resolver()
export class SpacesResolver {
  constructor(private spacesService: SpacesService) {}

  @Query(() => [Space])
  spaces() {
    return this.spacesService.getAll();
  }

  @Query(() => Space)
  space(@Args('id') id: number) {
    return this.spacesService.getOne(id);
  }

  @Mutation(() => Space)
  spaceCreate(@Args() data: CreateSpace) {
    return this.spacesService.create(data);
  }

  @Mutation(() => Space)
  spaceUpdate(@Args('id') id: number, @Args('data') data: UpdateSpace) {
    return this.spacesService.update(id, data);
  }

  @Mutation(() => Space)
  spaceDelete(@Args('id') id: number) {
    return this.spacesService.delete(id);
  }
}
