import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewGenre, UpdateGenre } from 'src/graphql';
import { GenresService } from '../services/genres.service';

@Resolver()
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}
  @Query('genre')
  genre(@Args('id') id: string) {
    return this.genresService.getGenre(id);
  }
  @Query('genres')
  genres(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.genresService.getGenres(limit, offset);
  }
  @Mutation('createGenre')
  createGenre(@Args('newGenre') genre: NewGenre, @Context('token') token: string) {
    return this.genresService.createGenre(genre, token);
  }

  @Mutation('updateGenre')
  updateGenre(
    @Args('id') id: string,
    @Args('updateGenre') updateGenre: UpdateGenre,
    @Context('token') token: string,
  ) {
    return this.genresService.updateGenre(id, updateGenre, token);
  }
  @Mutation('deleteGenre')
  deleteGenre(@Args('id') id: string, @Context('token') token: string) {
    return this.genresService.deleteGenre(id, token);
  }
}
