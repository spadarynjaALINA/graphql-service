import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsResolver } from './resolvers/artists.resolver';
import { ArtistsSchema, Artists } from './artists.schema';
import { ArtistsService } from './services/artists.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artists.name, schema: ArtistsSchema }]),
  ],
  providers: [ArtistsResolver, ArtistsService],
})
export class ArtistsModule {}
