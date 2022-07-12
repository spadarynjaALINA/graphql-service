import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateArtist, UpdateArtist } from 'src/graphql';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { ArtistsService } from '../services/artists.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
  ) {}
  @Query('artist')
  artist(@Args('id') id: string) {
    return this.artistsService.getArtist(id);
  }
  @Query('artists')
  artists(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.artistsService.getArtists(limit, offset);
  }
  @Mutation('createArtist')
  createArtist(
    @Args('artist') artist: CreateArtist,
    @Context('token') token: string,
  ) {
    return this.artistsService.newArtist(artist, token);
  }

  @Mutation('updateArtist')
  updateArtist(
    @Args('id') id: string,
    @Args('updateArtist') artist: UpdateArtist,
    @Context('token') token: string,
  ) {
    return this.artistsService.updateArtist(id, artist, token);
  }
  @Mutation('deleteArtist')
  deleteArtist(@Args('id') id: string, @Context('token') token: string) {
    return this.artistsService.deleteArtist(id, token);
  }
  @ResolveField()
  async bands(@Parent() artist) {
    const { bandsIds } = artist;
    return await Promise.all(
      bandsIds.map(async (band) => {
        return this.bandsService.getBand(band);
      }),
    );
  }
}
