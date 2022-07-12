import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewAlbum, UpdateAlbum } from 'src/graphql';
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from 'src/utils/utils';
import 'dotenv/config';
@Injectable()
export class AlbumsService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.ALBUMS_URL;
  }

  async getAlbum(id: string) {
    const url = axios.create({ baseURL: this.baseURL });
    return await getItem(id, url);
  }

  async getAlbums(limit: number, offset: number) {
     const url = axios.create({ baseURL: this.baseURL });
    return await getItems(limit, offset, url);
  }
  async createAlbum(album: NewAlbum, token: string) {
     const url = axios.create({ baseURL: this.baseURL });
    return await createItem(album, token, url);
  }

  async updateAlbum(id: string, album: UpdateAlbum, token: string) {
     const url = axios.create({ baseURL: this.baseURL });
    return await updateItem(id, token, url, album);
  }
  async deleteAlbum(id: string, token: string) {
     const url = axios.create({ baseURL: this.baseURL });
    return await deleteItem(id, token, url);
  }
}
