import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { getItem, getItems } from 'src/utils/utils';
import 'dotenv/config';
import { addFavourites } from 'src/utils/utils';
@Injectable()
export class FavouritesService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.FAVOURITES_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async addArtistToFavorite(id: string, token: string) {
    addFavourites(id, token, 'artists');
  }

  async addBandToFavorite(id: string, token: string) {
    addFavourites(id, token, 'bands');
  }
  async addGenreToFavorite(id: string, token: string) {
    addFavourites(id, token, 'genre');
  }
  async addTrackToFavorite(id: string, token: string) {
    addFavourites(id, token, 'track');
  }
  async getFavourites(token: string) {
    try {
      const { data } = await this.url.get('/', {
        headers: { Authorization: token },
      });
      return data ? { ...data, id: data._id } : null;
    } catch (error) {
      console.error(error);
    }
  }
}
