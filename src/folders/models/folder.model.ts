import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

import { Space } from 'src/spaces/models/space.model';

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

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
