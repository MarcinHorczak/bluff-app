import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';
import { v4 } from 'uuid'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username: username }).exec()
  }

  async create(userData: User): Promise<any> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    const userId = v4();

    const user = {
      userId: userId,
      username: userData.username,
      password: hashedPassword,
      ranking: 0,
    }

    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
}
