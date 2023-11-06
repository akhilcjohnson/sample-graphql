import { Module } from '@nestjs/common';
import { CatsService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatResolver } from './cat.resolver';
import { CatSchema } from './Schemas/cat.schemas';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    debug: false,
    playground: true,
    installSubscriptionHandlers: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
})],
  providers: [CatsService, CatResolver]
})
export class CatModule {}


