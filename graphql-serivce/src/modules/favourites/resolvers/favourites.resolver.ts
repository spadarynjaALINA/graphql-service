import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';
import { FavouritesService } from '../services/favourites.service';

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly tracksService: TracksService,
  ) {}

  @Query('favourites')
  favourites(@Context('token') token: string) {
    return this.favouritesService.getFavourites(token);
  }
  @Mutation('addArtistToFavourites')
  addArtistToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return this.favouritesService.addArtistToFavorite(id, token);
  }
  @Mutation('addBandToFavourites')
  addBandToFavourites(@Args('id') id: string, @Context('token') token: string) {
    return this.favouritesService.addBandToFavorite(id, token);
  }
  @Mutation('addGenreToFavourites')
  addGenreToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return this.favouritesService.addGenreToFavorite(id, token);
  }

  @ResolveField()
  async artists(@Parent() favourites) {
    const { artistsIds } = favourites;
    return await artistsIds.map(async (artist) => {
      return this.artistsService.getArtist(artist);
    });
  }

  @ResolveField()
  async bands(@Parent() favourites) {
    const { bandsIds } = favourites;
    return await bandsIds.map(async (band) => {
      return this.bandsService.getBand(band);
    });
  }

  @ResolveField()
  async genres(@Parent() favourites) {
    const { genresIds } = favourites;
    return await genresIds.map(async (genre) => {
      return this.genresService.getGenre(genre);
    });
  }

  @ResolveField()
  async tracks(@Parent() favourites) {
    const { tracksIds } = favourites;
    return await tracksIds.map(async (track) => {
      return this.tracksService.getTrack(track);
    });
  }
}
