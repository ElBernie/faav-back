import { Prisma, UserLink } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { UpdateUserLink } from './dto/update-userlink.input';
import { LinksService } from 'src/links/links.service';

@Injectable()
export class UserlinkService {
  constructor(
    private prismaService: PrismaService,
    private linkService: LinksService,
  ) {}

  async getAll(): Promise<UserLink[]> {
    return this.prismaService.userLink.findMany();
  }

  async geOne(id: number): Promise<UserLink> {
    return this.prismaService.userLink.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(link: string): Promise<UserLink> {
    const existingLink = await this.linkService.findByLink(link);

    /**
     * @todo when link relation are done
     */
    // if (existingLink) {
    //   return this.prismaService.userLink.create();
    // } else {
    //   const createdLink = await this.linkService.create(link);
    // }

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
}
