import { Injectable } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';

import { ArtistsInput } from '../input/artists.input';
import { Model } from 'mongoose';
import { ArtistsType } from '../dto/create-artists.dto';
import { Artists, ArtistsDocument } from '../artists.schema';
@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artists.name)
    private readonly artistsModel: Model<ArtistsDocument>,
  ) {}
  async create(createArtistsDto: ArtistsType): Promise<Artists> {
    const createdArtists = new this.artistsModel(createArtistsDto);
    return createdArtists.save();
  }
  async findAll(): Promise<Artists[]> {
    return await this.artistsModel.find().exec();
  }
}
// const data = await datasource.artistAPI/getArtists()
