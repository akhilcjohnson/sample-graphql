import { Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cat.service';


@Resolver()
export class CatResolver {
  constructor(
    private catService: CatsService,
  ) {}

  @Query(() => String)
  async hello() {
    return 'Helo';
  }

}