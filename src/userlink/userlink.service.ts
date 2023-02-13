import { Folder, Link, Prisma, Space, User, UserLink } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { UpdateUserLink } from './dto/update-userlink.input';
import { LinksService } from 'src/links/links.service';
import { CreateUserlink } from './dto/create-userlink.args';

@Injectable()
export class UserlinkService {
  constructor(
    private prismaService: PrismaService,
    private linkService: LinksService,
  ) {}

  async getAll(): Promise<UserLink[]> {
    return this.prismaService.userLink.findMany();
  }

  async getOne(id: number): Promise<UserLink> {
    return this.prismaService.userLink.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(linkCreation: CreateUserlink): Promise<UserLink> {
    const existingLink = await this.linkService.findByLink(linkCreation.url);

    /**
     * @todo when link relation are done
     */
    if (existingLink) {
      return this.prismaService.userLink.create({
        data: {
          Link: {
            connect: {
              id: existingLink.id,
            },
          },
          User: {
            connect: {
              id: linkCreation.creator,
            },
          },
          Space: {
            connect: {
              id: linkCreation.space,
            },
          },
          Folder: linkCreation.folder && {
            connect: {
              id: linkCreation.folder,
            },
          },
        },
      });
    } else {
      const createdLink = await this.linkService.create(linkCreation.url);
      return this.prismaService.userLink.create({
        data: {
          Link: {
            connect: {
              id: createdLink.id,
            },
          },
          User: {
            connect: {
              id: linkCreation.creator,
            },
          },
          Space: {
            connect: {
              id: linkCreation.space,
            },
          },
          Folder: {
            connect: {
              id: linkCreation.folder,
            },
          },
        },
      });
    }

    return;
  }

  async update(id: number, data: UpdateUserLink): Promise<UserLink> {
    const validate = Prisma.validator<Prisma.UserLinkUpdateInput>()(data);
    return this.prismaService.userLink.update({
      where: {
        id: id,
      },
      data: validate,
    });
  }

  async delete(id: number): Promise<UserLink> {
    return this.prismaService.userLink.delete({
      where: {
        id: id,
      },
    });
  }

  async getLink(id: number): Promise<Link> {
    return this.prismaService.userLink.findUnique({ where: { id: id } }).Link();
  }

  async getSpace(id: number): Promise<Space> {
    return this.prismaService.userLink
      .findUnique({ where: { id: id } })
      .Space();
  }

  async getFolder(id: number): Promise<Folder> {
    return this.prismaService.userLink
      .findUnique({ where: { id: id } })
      .Folder();
  }

  async getCreator(id: number): Promise<User> {
    return this.prismaService.userLink
      .findUnique({
        where: {
          id: id,
        },
      })
      .User();
  }
}
