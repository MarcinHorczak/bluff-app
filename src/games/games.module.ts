import { Module } from '@nestjs/common';
import { GamesResolver } from './games.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesSchema } from './games.schema';
import { GamesService } from './games.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GamesSchema }])],
  providers: [GamesResolver, GamesService],
})
export class GamesModule {}
