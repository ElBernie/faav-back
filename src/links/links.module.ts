import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LinksResolver } from './links.resolver';
import { LinksService } from './links.service';

@Module({
  providers: [LinksResolver, LinksService, PrismaService],
  exports: [LinksService],
})
export class LinksModule {}
