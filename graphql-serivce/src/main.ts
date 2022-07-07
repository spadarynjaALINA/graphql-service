import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// import { ApolloServer } from 'apollo-server';

// import typeDefs, { resolvers } from './schema';
// import { BaseAPI } from './utils/utils';
// const url = process.env.ARTIST_URL;

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   csrfPrevention: true,
//   cache: 'bounded',

//   dataSources: () => {
//     return { artistAPI: new BaseAPI(url) };
//   },
//   context: ({ req }) => {
//     const token = req.headers.authorization || '';
//     return token;
//   },
// });

// server
//   .listen({ port: 3000 })
//   .then(({ url }) => {
//     console.log(`  Server ready at ${url}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//  @ResolveField()
// async id(@Parent() genre: GenreResponse) {
//   return genre._id;
// }

// artists(
//     pagination: PaginationInput
//     filter: FilterArtistsInput
//   ): ArtistsPagination!

// input PaginationInput {
//   offset: Int
//   limit: Int
// }

// input FilterArtistsInput {
//   firstName: String
//   secondName: String
//   middleName: String
//   birthDate: String
//   birthPlace: String
//   country: String
// }
// const server = new ApolloServer({
//   typeDefs: schemas,
//   csrfPrevention: true,
//   cache: "bounded",
//   resolvers,
//   dataSources: () => ({
//     albumAPI: new BaseAPI(API_URLS.ALBUM_API),
//     artistAPI: new BaseAPI(API_URLS.ARTIST_API),
//     genreAPI: new BaseAPI(API_URLS.GENRE_API),
//     bandAPI: new BaseAPI(API_URLS.BAND_API),
//     userAPI: new UserAPI(API_URLS.USER_API),
//     trackAPI: new BaseAPI(API_URLS.TRACK_API),
//     favoritesAPI: new BaseAPI(API_URLS.FAVORITES_API),
//   }),
//   context: ({ req }) => {
//     const token = req.headers.authorization || "";
//     return token;
//   },
// });

// Mutation: {
//     async login(_parent: any, { email, password }: any, context: any) {
//       const res = await context.dataSources.userAPI.login({ email, password });
//       return res;
//     },
//   },
// @ResolveField(() => [Genre])
// genres(@Parent() album: AlbumResponse) {
//   return asyncQueries<GenreResponse>(album.genresIds, (id) =>
//     this.genresService.getById(id),
//   );
// }
