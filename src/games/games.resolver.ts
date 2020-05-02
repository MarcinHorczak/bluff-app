import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { GamesService } from "./games.service";
import { GameType } from "./dto/create-game.dto";
import { GameInput } from "./inputs/game.input";

@Resolver()
export class GamesResolver {
  constructor(
    private gamesService: GamesService,
  ) {}

  @Query(() => String)
  async helloWorld() {
    return 'hello World!'
  }

  @Query(() => [GameType])
  async games() {
    return this.gamesService.findAll()
  }

  @Mutation(() => GameType)
  async createGame(@Args('input') input: GameInput) {
    return this.gamesService.create(input);
  }
}