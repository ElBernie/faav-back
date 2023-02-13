import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserLink {
  @Field(() => GraphQLISODateTime)
  createdAt: Date;
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
