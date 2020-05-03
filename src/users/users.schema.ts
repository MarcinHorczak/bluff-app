import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    userId: String,
    username: String,
    ranking: Number,
    password: String,
});
