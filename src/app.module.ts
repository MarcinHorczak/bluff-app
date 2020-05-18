import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';

dotenv.config()

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'dist', '*.{ts,js}')),
    MongooseModule.forRoot(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      debug: true,
      playground: true,
      introspection: true
    }),
    AuthModule,
    GamesModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
