import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';
import { addFavourites } from 'src/utils/utils';
@Injectable()
export class FavouritesService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.FAVORITES_URL;
  }

  async addArtistToFavorite(id: string, token: string) {
    return await addFavourites(id, token, 'artists');
  }

  async addBandToFavorite(id: string, token: string) {
    return await addFavourites(id, token, 'bands');
  }

  async addGenreToFavorite(id: string, token: string) {
    return await addFavourites(id, token, 'genres');
  }

  async addTrackToFavorite(id: string, token: string) {
    return await addFavourites(id, token, 'tracks');
  }
  async getFavourites(token: string) {
    const url = axios.create({
      baseURL: this.baseURL,
    });
    try {
      const { data } = await url.get('/', {
        headers: { Authorization: token },
      });
      return data ? { ...data, id: data._id } : null;
    } catch (error) {
      console.error(error);
    }
  }
}
