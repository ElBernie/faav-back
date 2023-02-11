import { Injectable } from '@nestjs/common';
import { Link } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LinksService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Link[]> {
    return this.prismaService.link.findMany();
  }

  async get(id: number): Promise<Link> {
    return this.prismaService.link.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(url: string): Promise<Link> {
    const parsedURL = new URL(url);
    return this.prismaService.link.create({
      data: {
        href: parsedURL.href,
        origin: parsedURL.origin,
        host: parsedURL.host,
        hostname: parsedURL.hostname,
        protocol: parsedURL.protocol,
        port: parsedURL.port || null,
        auth:
          parsedURL.username && parsedURL.password
            ? `${parsedURL.username}:${parsedURL.password}`
            : null,
        username: parsedURL.username || null,
        password: parsedURL.password || null,
        path: parsedURL.pathname + parsedURL.searchParams + parsedURL.hash,
        pathname: parsedURL.pathname || null,
        search: parsedURL.search || null,
        hash: parsedURL.hash || null,
      },
    });
  }

  async delete(id: number): Promise<Link> {
    return this.prismaService.link.delete({
      where: {
        id: id,
      },
    });
  }
}
