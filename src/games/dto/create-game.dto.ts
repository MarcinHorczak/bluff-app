import { ObjectType, Field, Int, ID } from "@nestjs/graphql";

@ObjectType()
export class GameType {
    @Field(() => ID) id: string;
    @Field() readonly name: string;
    @Field(() => Int) readonly age: number;
    @Field() readonly breed: string;
}