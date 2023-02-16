import { Injectable } from '@nestjs/common';
import { User, Space, Folder, UserLink } from '@prisma/client';

import { PrismaService } from 'src/prisma.service';
import UserJWT from 'src/auth/types/userjwt.type';
import { CreateSpace } from './dto/create-space.args';
import { SetSpaceInfos } from './dto/setinfos-space.args';
import { UpdateSpace } from './dto/update-space.args';
import { GraphQLError } from 'graphql';

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

  async setInfos(
    currentUser: UserJWT,
    id: number,
    infos: SetSpaceInfos,
  ): Promise<Space> {
    const space = await this.prismaService.space.findUnique({
      where: { id: id },
    });

    if (space) {
      if (space.owner == currentUser.id) {
        if (infos.slug != null) {
          const slugAlreadyTaken = await this.prismaService.space.findFirst({
            where: {
              owner: currentUser.id,
              slug: infos.slug,
            },
          });
          if (!slugAlreadyTaken && infos.slug != undefined) {
            return this.prismaService.space.update({
              where: { id: id },
              data: {
                name: infos.name,
                slug: infos.slug,
                description: infos.description,
              },
            });
          } else {
            throw new GraphQLError('SLUG_TAKEN');
          }
        } else {
          return this.prismaService.space.update({
            where: { id: id },
            data: {
              name: infos.name,
              slug: infos.slug,
              description: infos.description,
            },
          });
        }
      } else {
        throw new GraphQLError('UNAUTHORIZED');
      }
    } else {
      throw new GraphQLError('SPACE_NOT_FOUND');
    }
  }

  async setListed(user: UserJWT, id: number, listed: boolean) {
    const space = await this.prismaService.space.findUnique({
      where: { id: id },
    });

    if (space) {
      if (space.owner == user.id) {
        return this.prismaService.space.update({
          where: { id: id },
          data: {
            listed: listed,
          },
        });
      } else {
        throw new GraphQLError('UNAUTHORIZED');
      }
    } else {
      throw new GraphQLError('SPACE_NOT_FOUND');
    }
  }
}
