import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Link } from 'src/links/models/link.model';
import { Folder } from 'src/folders/models/folder.model';
import { Space } from 'src/spaces/models/space.model';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Userlink {
  @Field()
  id: number;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => Link)
  link: Link;

  @Field(() => Space)
  space: Space;

  @Field(() => Folder, { nullable: true })
  folder?: Folder;

  @Field(() => User)
  creator: User;
}
