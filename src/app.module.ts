import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './Cats/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    CatModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  MongooseModule.forRoot('mongodb+srv://cjspace02:cjspace02@cluster0.kpyyvsl.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}