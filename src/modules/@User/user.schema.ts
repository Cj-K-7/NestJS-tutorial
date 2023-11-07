import { Field, ID, ObjectType, ArgsType, InputType } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  mobileContact: string;
  @Field()
  password: string;
  @Field()
  address: string;
  @Field({ nullable: true })
  photoURL: string;
  @Field({ nullable: true })
  access_token: string;
}

@ArgsType()
@InputType()
export class UserInputType {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  photoURL: string;

  @Field()
  password1: string;

  @Field()
  password2: string;
}
