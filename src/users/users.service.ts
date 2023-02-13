import { Injectable } from '@nestjs/common';
import { User, Prisma, Space } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

import { UpdateUser } from './dto/update-user.args';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<User[] | null> {
    return this.prismaService.user.findMany();
  }

  async getOne(id: number): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(args: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: {
        ...args,
        username: args.username.toLowerCase(),
        email: args.email.toLowerCase(),
        spaces: {
          create: {
            name: 'My private space',
            slug: 'my-private-space',
          },
        },
      },
    });
  }

  async update(id: number, args: UpdateUser): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id: id,
      },

      data: {
        ...args,

        username: args.username?.toLowerCase(),
        email: args.email?.toLowerCase(),
      },
    });
  }

  async delete(id: number): Promise<User> {
    return this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
  }

  async getUserSpaces(id: number): Promise<Space[]> {
    return this.prismaService.user.findUnique({ where: { id: id } }).spaces();
  }
}
