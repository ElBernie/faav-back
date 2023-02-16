import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import UserJWT from 'src/auth/types/userjwt.type';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<string> {
    const user = await this.usersService.getByEmail(email);
    if (!user) {
      throw new GraphQLError('INVALID_CREDENTIALS');
    }

    const checkUserpasword = await this.comparePassword(
      password,
      user.password,
    );
    if (!checkUserpasword) {
      throw new GraphQLError('INVALID_CREDENTIALS');
    }

    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
      displayName: user.displayName,
      createdAt: user.createdAt,
    } as UserJWT;
    return this.jwtService.sign(payload);
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
