import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { getItem } from 'src/utils/utils';
@Injectable()
export class FavouritesService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.FAVOURITES_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async getFavourites(limit: number, offset: number) {
    getItems(limit, offset, this.url);
  }
  async createFavourite(favourite: NewFavourite, token: string) {
    createItem(favourite, token, this.url);
  }

  async updateFavourite(id: string, favourite: UpdateFavourite, token: string) {
    updateItem(id, token, this.url, favourite);
  }
  async deleteFavourite(id: string, token: string) {
    deleteItem(id, token, this.url);
  }
}
