import { Injectable } from '@nestjs/common';
import { User, Space, Folder, UserLink } from '@prisma/client';

import { PrismaService } from 'src/prisma.service';
import { CreateSpace } from './dto/create-space.args';
import { UpdateSpace } from './dto/update-space.args';

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

  async getSpaceOwner(id: number): Promise<User> {
    return this.prismaService.space.findUnique({ where: { id: id } }).Owner();
  }

  async getSpaceFolders(id: number): Promise<Folder[]> {
    return this.prismaService.space.findUnique({ where: { id: id } }).Folders();
  }

  async getSpaceLinks(id: number): Promise<UserLink[]> {
    return this.prismaService.userLink.findMany({
      where: {
        space: id,
        folder: null,
      },
    });
  }
}
