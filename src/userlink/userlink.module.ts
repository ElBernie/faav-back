import { Module } from '@nestjs/common';
import { LinksModule } from 'src/links/links.module';
import { LinksService } from 'src/links/links.service';
import { PrismaService } from 'src/prisma.service';
import { UserlinkResolver } from './userlink.resolver';
import { UserlinkService } from './userlink.service';

@Module({
  providers: [UserlinkResolver, UserlinkService, LinksService, PrismaService],
  imports: [LinksModule],
})
export class UserlinkModule {}
