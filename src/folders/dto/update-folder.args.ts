import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateFolder {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field(() => Int, { nullable: true })
  space?: number;
}
