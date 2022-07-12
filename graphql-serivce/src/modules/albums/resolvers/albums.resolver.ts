import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { NewAlbum, UpdateAlbum } from 'src/graphql';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';
import { AlbumsService } from '../services/albums.service';

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly tracksService: TracksService,
  ) {}
  @Query('album')
  album(@Args('id') id: string) {
    return this.albumsService.getAlbum(id);
  }
  @Query('albums')
  albums(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.albumsService.getAlbums(limit, offset);
  }
  @Mutation('createAlbum')
  createAlbum(@Args('album') Album: NewAlbum, @Context('token') token: string) {
    return this.albumsService.createAlbum(Album, token);
  }

  @Mutation('updateAlbum')
  updateAlbum(
    @Args('id') id: string,
    @Args('album') Album: UpdateAlbum,
    @Context('token') token: string,
  ) {
    return this.albumsService.updateAlbum(id, Album, token);
  }
  @Mutation('deleteAlbum')
  deleteAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.deleteAlbum(id, token);
  }

  @ResolveField()
  async artists(@Parent() album) {
    const { artistsIds } = album;
    return await Promise.all(
      artistsIds.map(async (artist) => {
        return this.artistsService.getArtist(artist);
      }),
    );
  }
  @ResolveField()
  async bands(@Parent() album) {
    const { bandsIds } = album;
    return await Promise.all(
      bandsIds.map(async (band) => {
        return this.bandsService.getBand(band);
      }),
    );
  }
  @ResolveField()
  async genres(@Parent() album) {
    const { genresIds } = album;
    return await Promise.all(
      genresIds.map(async (genreId) => {
        return this.genresService.getGenre(genreId);
      }),
    );
  }
  @ResolveField()
  async tracks(@Parent() album) {
    const { trackIds } = album;
    return await Promise.all(
      trackIds.map(async (trackId) => {
        return this.tracksService.getTrack(trackId);
      }),
    );
  }
}
