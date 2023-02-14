import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.JWT_SIGN_KEY,
    }),
  ],
  providers: [
    AuthService,
    PrismaService,
    JwtStrategy,
    AuthResolver,
    UsersService,
  ],
  exports: [JwtModule],
})
export class AuthModule {}
