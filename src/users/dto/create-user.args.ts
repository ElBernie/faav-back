import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

@ArgsType()
export class CreateUser {
  @Field({ nullable: false })
  @IsString()
  @Matches(/^[a-zA-Z0-9]+([-][a-zA-Z0-9]+)*$/)
  @MinLength(2)
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({})
  @MinLength(8)
  password: string;

  @Field()
  @MinLength(2)
  displayName: string;
}
