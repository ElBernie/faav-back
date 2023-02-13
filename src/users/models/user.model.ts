import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Space } from 'src/spaces/models/space.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  displayName: string;

  @Field(() => [Space])
  spaces: Space[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
