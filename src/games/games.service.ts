import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './interfaces/game.interface';
import { GameInput } from './inputs/game.input';

@Injectable()
export class GamesService {
  constructor(@InjectModel('Game') private gameModel: Model<Game>) {}

  async create(createGameDto: GameInput): Promise<Game> {
    const createdGame = new this.gameModel(createGameDto);
    return createdGame.save();
  }

  async findAll(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }
}
