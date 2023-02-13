import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CreateSpace {
  @Field()
  slug: string;

  @Field()
  name: string;

  @Field({ defaultValue: 'PRIVATE' })
  type: string;

  @Field(() => Boolean, { defaultValue: false })
  listed: boolean;

  @Field(() => Int)
  owner: number;
}
