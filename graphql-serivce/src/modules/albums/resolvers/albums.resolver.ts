import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewAlbum, UpdateAlbum } from 'src/graphql';
import { AlbumsService } from '../services/albums.service';

@Resolver()
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}
  @Query('getAlbum')
  getAlbumById(@Args('id') id: string) {
    return this.albumsService.getAlbum(id);
  }
  @Query('getAlbums')
  getAlbums(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.albumsService.getAlbums(limit, offset);
  }
  @Mutation('createAlbum')
  createAlbum(@Args('Album') Album: NewAlbum, @Context('token') token: string) {
    return this.albumsService.createAlbum(Album, token);
  }

  @Mutation('updateAlbum')
  updateAlbum(
    @Args('id') id: string,
    @Args('Album') Album: UpdateAlbum,
    @Context('token') token: string,
  ) {
    return this.albumsService.updateAlbum(id, Album, token);
  }
  @Mutation('deleteAlbum')
  deleteAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.deleteAlbum(id, token);
  }
}
