import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArtistsService } from '../services/artists.service';
import { ArtistsType } from '../dto/create-artists.dto';
import { ArtistsInput } from '../input/artists.input';
@Resolver()
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}
  @Query(() => [ArtistsType])
  async artists() {
    return this.artistsService.findAll();
  }
  @Mutation(() => ArtistsType)
  async createArtists(@Args('input') input: ArtistsType) {
    return this.artistsService.create(input);
  }
}
