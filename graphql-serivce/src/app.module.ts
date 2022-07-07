import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ArtistsModule } from './modules/artists/artists.module';

import { AlbumsModule } from './modules/albums/albums.module';
import { BandsModule } from './modules/bands/bands.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { GenresModule } from './modules/genres/genres.module';
import { TracksModule } from './modules/tracks/tracks.module';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsSchema } from './modules/artists/artists.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },

      context: ({ req }) => {
        const token = req.headers.authorization || '';
        return { token };
      },
    }),
    ArtistsModule,
    AlbumsModule,
    BandsModule,
    FavouritesModule,
    GenresModule,
    TracksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
