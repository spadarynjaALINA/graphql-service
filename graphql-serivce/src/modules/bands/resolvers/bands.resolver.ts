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
  createBand(@Args('band') band: NewBand, @Context('token') token: string) {
    return this.bandsService.createBand(band, token);
  }

  @Mutation('updateBand')
  updateBand(
    @Args('id') id: string,
    @Args('Band') band: UpdateBand,
    @Context('token') token: string,
  ) {
    return this.bandsService.updateBand(id, band, token);
  }
  @Mutation('deleteBand')
  deleteBand(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.deleteBand(id, token);
  }
}
