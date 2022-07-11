import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { NewTrack, UpdateTrack } from 'src/graphql';
import { AlbumsService } from 'src/modules/albums/services/albums.service';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from '../services/tracks.service';

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
  ) {}
  @Query('track')
  track(@Args('id') id: string) {
    return this.tracksService.getTrack(id);
  }
  @Query('tracks')
  tracks(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.tracksService.getTracks(limit, offset);
  }
  @Mutation('createTrack')
  createTrack(@Args('createTrack') newTrack: NewTrack, @Context('token') token: string) {
    return this.tracksService.createTrack(newTrack, token);
  }

  @Mutation('updateTrack')
  updateTrack(
    @Args('id') id: string,
    @Args('updateTrack') newTrack: UpdateTrack,
    @Context('token') token: string,
  ) {
    return this.tracksService.updateTrack(id, newTrack, token);
  }
  @Mutation('deleteTrack')
  deleteTrack(@Args('id') id: string, @Context('token') token: string) {
    return this.tracksService.deleteTrack(id, token);
  }

  @ResolveField()
  async album(@Parent() track) {
    const { albumId } = track;
    return await this.albumsService.getAlbum(albumId);
  }

  @ResolveField()
  async artists(@Parent() track) {
    const { artistsIds } = track;
    return Promise.all(
      artistsIds.map(async (artistId) => {
        return this.artistsService.getArtist(artistId);
      }),
    );
  }

  @ResolveField()
  async bands(@Parent() track) {
    const { bandsIds } = track;
    return Promise.all(
      bandsIds.map(async (bandId) => {
        return this.bandsService.getBand(bandId);
      }),
    );
  }
  @ResolveField()
  async genres(@Parent() track) {
    const { genresIds } = track;
    return Promise.all(
      genresIds.map(async (genreId) => {
        return this.genresService.getGenre(genreId);
      }),
    );
  }
}
