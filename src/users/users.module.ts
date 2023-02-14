import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [UsersService, UsersResolver, PrismaService, AuthService],
  exports: [UsersService],
})
export class UsersModule {}
