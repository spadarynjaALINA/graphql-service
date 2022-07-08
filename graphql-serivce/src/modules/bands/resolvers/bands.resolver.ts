import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewBand, UpdateBand } from 'src/graphql';
import { BandsService } from '../services/bands.service';

@Resolver()
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}
  @Query('getBand')
  getBandById(@Args('id') id: string) {
    return this.bandsService.getBand(id);
  }
  @Query('getBands')
  getBands(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.bandsService.getBands(limit, offset);
  }
  @Mutation('createBand')
  createArtist(@Args('artist') band: NewBand, @Context('token') token: string) {
    return this.bandsService.createBand(band, token);
  }

  @Mutation('updateBand')
  updateArtist(
    @Args('id') id: string,
    @Args('artist') artist: UpdateBand,
    @Context('token') token: string,
  ) {
    return this.bandsService.updateBand(id, artist, token);
  }
  @Mutation('deleteBand')
  deleteArtist(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.deleteBand(id, token);
  }
}
