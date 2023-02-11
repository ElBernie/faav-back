import { Field, GraphQLISODateTime, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Link {
  @Field(() => Int)
  id: number;

  @Field()
  href: string;

  @Field()
  origin: string;

  @Field()
  protocol: string;

  @Field({ nullable: true })
  auth?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;

  @Field()
  host: string;

  @Field()
  hostname: string;

  @Field({ nullable: true })
  port?: string;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  pathname?: string;

  @Field({ nullable: true })
  search?: string;

  @Field({ nullable: true })
  hash?: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
