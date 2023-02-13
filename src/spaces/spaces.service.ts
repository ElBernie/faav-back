import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSpace } from './dto/create-space.args';
import { UpdateSpace } from './dto/update-space.args';
import { Space } from './models/space.model';

@Injectable()
export class SpacesService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Space[]> {
    return this.prismaService.space.findMany();
  }

  async getOne(id: number): Promise<Space> {
    return this.prismaService.space.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(data: CreateSpace): Promise<Space> {
    return this.prismaService.space.create({
      data: data,
    });
  }

  async update(id: number, data: UpdateSpace): Promise<Space> {
    return this.prismaService.space.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async delete(id: number): Promise<Space> {
    return this.prismaService.space.delete({
      where: {
        id: id,
      },
    });
  }
}
