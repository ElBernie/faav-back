import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CreateFolder {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field(() => Int)
  space: number;
}
