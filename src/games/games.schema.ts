import * as mongoose from 'mongoose';

export const GamesSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
