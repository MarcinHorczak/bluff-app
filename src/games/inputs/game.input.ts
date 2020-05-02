import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class GameInput {
  @Field() readonly name: string;
  @Field(() => Int) readonly age: number;
  @Field() readonly breed: string;
}