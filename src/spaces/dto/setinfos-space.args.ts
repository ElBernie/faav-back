import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, Length, Matches } from 'class-validator';

@InputType()
export class SetSpaceInfos {
  @Field({ nullable: true })
  @IsOptional()
  @Length(2)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  @Length(2, 20)
  slug?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(2)
  description?: string;
}
