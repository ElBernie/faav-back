import { Int, ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { Folder } from 'src/folders/models/folder.model';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Space {
  @Field(() => Int)
  id: number;

  @Field()
  slug: string;

  @Field()
  name: string;

  @Field(() => User)
  owner: User;

  @Field({ defaultValue: 'PRIVATE' })
  type: string;

  @Field(() => Boolean, { defaultValue: false })
  listed: boolean;

  @Field(() => [Folder], { nullable: 'itemsAndList' })
  folders?: Folder[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
