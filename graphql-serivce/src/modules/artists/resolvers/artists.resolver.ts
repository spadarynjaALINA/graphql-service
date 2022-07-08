import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewArtist, UpdateArtist } from 'src/graphql';
import { ArtistsService } from '../services/artists.service';

@Resolver()
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}
  @Query('getArtist')
  getArtistById(@Args('id') id: string) {
    return this.artistsService.getArtist(id);
  }
  @Query('getArtists')
  getArtists(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.artistsService.getArtists(limit, offset);
  }
  @Mutation('createArtist')
  createArtist(
    @Args('artist') artist: NewArtist,
    @Context('token') token: string,
  ) {
    return this.artistsService.createArtist(artist, token);
  }

  @Mutation('updateArtist')
  updateArtist(
    @Args('id') id: string,
    @Args('artist') artist: UpdateArtist,
    @Context('token') token: string,
  ) {
    return this.artistsService.updateArtist(id, artist, token);
  }
  @Mutation('deleteArtist')
  deleteArtist(@Args('id') id: string, @Context('token') token: string) {
    return this.artistsService.deleteArtist(id, token);
  }
}
