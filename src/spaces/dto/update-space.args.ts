import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateSpace {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  type?: string;

  @Field(() => Boolean, { nullable: true })
  listed?: boolean;
}
