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
@Injectable()
export class GenresService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.GENRES_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }
  async getGenre(id: string) {
    getItem(id, this.url);
  }

  async getGenres(limit: number, offset: number) {
    getItems(limit, offset, this.url);
  }
  async createGenre(genre: NewGenre, token: string) {
    createItem(genre, token, this.url);
  }

  async updateGenre(id: string, genre: UpdateGenre, token: string) {
    updateItem(id, token, this.url, genre);
  }
  async deleteGenre(id: string, token: string) {
    deleteItem(id, token, this.url);
  }
}
