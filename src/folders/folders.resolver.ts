import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CreateFolder } from './dto/create-folder.args';
import { UpdateFolder } from './dto/update-folder.args';
import { FoldersService } from './folders.service';
import { Folder } from './models/folder.model';

@Resolver(() => Folder)
export class FoldersResolver {
  constructor(private foldersService: FoldersService) {}

  @Query(() => [Folder])
  folders() {
    return this.foldersService.getAll();
  }

  @Query(() => Folder)
  folder(id: number) {
    return this.foldersService.getOne(id);
  }

  @Mutation(() => Folder)
  folderCreate(@Args() data: CreateFolder) {
    return this.foldersService.create(data);
  }

  @Mutation(() => Folder)
  folderUpdate(@Args('id') id: number, @Args('data') data: UpdateFolder) {
    return this.foldersService.update(id, data);
  }

  @Mutation(() => Folder)
  folderDelete(@Args('id') id: number) {
    return this.foldersService.delete(id);
  }

  @ResolveField('space')
  space(@Parent() folder: Folder) {
    return this.foldersService.getFolderSpace(folder.id);
  }

  @ResolveField('links')
  async links(@Parent() folder: Folder) {
    return this.foldersService.getFolderLinks(folder.id);
  }
}
