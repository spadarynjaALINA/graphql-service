import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewTrack, UpdateTrack } from 'src/graphql';
import { TracksService } from '../services/tracks.service';

@Resolver()
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}
  @Query('getTrack')
  getTrackById(@Args('id') id: string) {
    return this.tracksService.getTrack(id);
  }
  @Query('getTracks')
  getTracks(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.tracksService.getTracks(limit, offset);
  }
  @Mutation('createTrack')
  createTrack(@Args('Track') track: NewTrack, @Context('token') token: string) {
    return this.tracksService.createTrack(track, token);
  }

  @Mutation('updateTrack')
  updateTrack(
    @Args('id') id: string,
    @Args('Track') track: UpdateTrack,
    @Context('token') token: string,
  ) {
    return this.tracksService.updateTrack(id, track, token);
  }
  @Mutation('deleteTrack')
  deleteTrack(@Args('id') id: string, @Context('token') token: string) {
    return this.tracksService.deleteTrack(id, token);
  }
}
