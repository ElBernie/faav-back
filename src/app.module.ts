import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';
import { UserlinkModule } from './userlink/userlink.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),

    UsersModule,

    LinksModule,

    UserlinkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
