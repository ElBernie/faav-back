import { Module } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { FoldersResolver } from './folders.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [FoldersService, FoldersResolver, PrismaService],
})
export class FoldersModule {}
