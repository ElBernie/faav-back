import { Injectable } from '@nestjs/common';
import { Folder, Prisma, Space, UserLink } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFolder } from './dto/create-folder.args';
import { UpdateFolder } from './dto/update-folder.args';

@Injectable()
export class FoldersService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Folder[]> {
    return this.prismaService.folder.findMany();
  }

  async getOne(id: number): Promise<Folder> {
    return this.prismaService.folder.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(data: CreateFolder): Promise<Folder> {
    const folderData: Prisma.FolderCreateInput = {
      name: data.name,
      slug: data.slug,
      Space: {
        connect: {
          id: data.space,
        },
      },
    };

    return this.prismaService.folder.create({
      data: folderData,
    });
  }

  async update(id: number, data: UpdateFolder): Promise<Folder> {
    const updateData: Prisma.FolderUpdateInput = {
      ...data,
      Space: {
        connect: {
          id: data.space,
        },
      },
    };

    return this.prismaService.folder.update({
      where: {
        id: id,
      },
      data: updateData,
    });
  }

  async delete(id: number): Promise<Folder> {
    return this.prismaService.folder.delete({
      where: {
        id: id,
      },
    });
  }

  async getFolderSpace(id: number): Promise<Space> {
    return this.prismaService.folder.findUnique({ where: { id: id } }).Space();
  }

  async getFolderLinks(id: number): Promise<UserLink[]> {
    return this.prismaService.folder.findUnique({ where: { id: id } }).Links();
  }
}
