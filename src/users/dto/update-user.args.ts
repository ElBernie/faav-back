import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsString,
  Matches,
  MinLength,
  IsOptional,
} from 'class-validator';

@InputType()
export class UpdateUser {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9]+([-][a-zA-Z0-9]+)*$/)
  @MinLength(2)
  username?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MinLength(8)
  password?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MinLength(2)
  displayName?: string;
}
