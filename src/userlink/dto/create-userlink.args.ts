import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CreateUserlink {
  @Field()
  url: string;

  @Field(() => Int)
  creator: number;

  @Field(() => Int)
  space: number;

  @Field(() => Int, { nullable: true })
  folder?: number;
}
