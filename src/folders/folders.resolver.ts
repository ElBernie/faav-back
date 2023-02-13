import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateFolder } from './dto/create-folder.args';
import { UpdateFolder } from './dto/update-folder.args';
import { FoldersService } from './folders.service';
import { Folder } from './models/folder.model';

@Resolver()
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
}
