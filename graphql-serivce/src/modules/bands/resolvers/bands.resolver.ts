import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { NewBand, UpdateBand } from 'src/graphql';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { BandsService } from '../services/bands.service';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly artistsService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}
  @Query('band')
  band(@Args('id') id: string) {
    return this.bandsService.getBand(id);
  }
  @Query('bands')
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
    @Args('band') band: UpdateBand,
    @Context('token') token: string,
  ) {
    return this.bandsService.updateBand(id, band, token);
  }
  @Mutation('deleteBand')
  deleteBand(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.deleteBand(id, token);
  }
  @ResolveField()
  async genres(@Parent() band) {
    const { genresIds } = band;
    return await Promise.all(
      genresIds.map(async (genre) => {
        return this.genresService.getGenre(genre);
      }),
    );
  }

  @ResolveField()
  async members(@Parent() band) {
    const { members } = band;
    return await Promise.all(
      members.map(async (member) => {
        const artist = await this.artistsService.getArtist(member.artist);
        return { ...member, artist };
      }),
    );
  }
}
