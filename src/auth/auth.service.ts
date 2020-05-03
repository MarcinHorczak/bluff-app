import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/models/user.model';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null
  }

  async register(userData: User): Promise<any> {
    return await this.usersService.create(userData)
  }

  async login(user: User): Promise<any> {
    const payload = { username: user.username, sub: user.userId }

    return {
      accessToken: this.jwtService.sign(payload)
    }
  }
}
