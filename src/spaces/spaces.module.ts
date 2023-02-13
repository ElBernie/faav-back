import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesResolver } from './spaces.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SpacesService, SpacesResolver, PrismaService],
})
export class SpacesModule {}
