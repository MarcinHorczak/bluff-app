import { Document } from 'mongoose';

export interface User extends Document {
    userId: string; 
    username: string;
    ranking: number;
    password: string;
}