import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewArtist } from 'src/graphql';
import { ArtistsService } from '../services/artists.service';

@Resolver()
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}
  @Query('getArtist')
  getArtistById(@Args('id') id: string, @Context('token') token: string) {
    return this.artistsService.getArtist(id, token);
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
}
