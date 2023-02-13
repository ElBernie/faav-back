import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Space } from 'src/spaces/models/space.model';
import { Userlink } from 'src/userlink/models/userlink.model';

@ObjectType()
export class Folder {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field(() => Space)
  space: Space;

  @Field(() => [Userlink], { nullable: 'items' })
  links: Userlink[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
