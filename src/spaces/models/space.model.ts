import { Int, ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class Space {
  @Field(() => Int)
  id: number;

  @Field()
  slug: string;

  @Field()
  name: string;

  @Field({ defaultValue: 'PRIVATE' })
  type: string;

  @Field(() => Boolean, { defaultValue: false })
  listed: boolean;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
