import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewGenre, UpdateGenre } from 'src/graphql';
import { GenresService } from '../services/genres.service';

@Resolver()
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}
  @Query('getGenre')
  getGenreById(@Args('id') id: string) {
    return this.genresService.getGenre(id);
  }
  @Query('getGenres')
  getGenres(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.genresService.getGenres(limit, offset);
  }
  @Mutation('createGenre')
  createGenre(@Args('genre') genre: NewGenre, @Context('token') token: string) {
    return this.genresService.createGenre(genre, token);
  }

  @Mutation('updateGenre')
  updateGenre(
    @Args('id') id: string,
    @Args('Genre') genre: UpdateGenre,
    @Context('token') token: string,
  ) {
    return this.genresService.updateGenre(id, genre, token);
  }
  @Mutation('deleteGenre')
  deleteGenre(@Args('id') id: string, @Context('token') token: string) {
    return this.genresService.deleteGenre(id, token);
  }
}
