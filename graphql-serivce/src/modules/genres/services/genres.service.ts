import { Injectable } from '@nestjs/common';
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from 'src/utils/utils';
import axios, { AxiosInstance } from 'axios';
import { NewGenre, UpdateGenre } from 'src/graphql';
import 'dotenv/config';
@Injectable()
export class GenresService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.GENRES_URL;

  }
  async getGenre(id: string) {
    const url =axios.create({ baseURL: this.baseURL });
   return await getItem(id, url);
  }

  async getGenres(limit: number, offset: number) {
    const url =axios.create({ baseURL: this.baseURL });
   return await getItems(limit, offset, url);
  }
  async createGenre(newGenre: NewGenre, token: string) {
    const url =axios.create({ baseURL: this.baseURL });
   return await createItem(newGenre, token, url);
  }

  async updateGenre(id: string, genre: UpdateGenre, token: string) {
     const url =axios.create({ baseURL: this.baseURL });
   return await updateItem(id, token, url, genre);
  }
  async deleteGenre(id: string, token: string) {
    const url =axios.create({ baseURL: this.baseURL });
   return await
    deleteItem(id, token, url);
  }
}
