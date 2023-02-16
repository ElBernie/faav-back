import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Matches, Length } from 'class-validator';

@ArgsType()
export class CreateSpace {
  @Field()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  @Length(2, 20)
  slug: string;

  @Field()
  @Length(2)
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field(() => Boolean, { defaultValue: false })
  listed: boolean;

  @Field(() => Int)
  owner: number;
}
