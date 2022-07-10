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
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async getAlbum(id: string) {
    getItem(id, this.url);
  }

  async getAlbums(limit: number, offset: number) {
    getItems(limit, offset, this.url);
  }
  async createAlbum(album: NewAlbum, token: string) {
    createItem(album, token, this.url);
  }

  async updateAlbum(id: string, album: UpdateAlbum, token: string) {
    updateItem(id, token, this.url, album);
  }
  async deleteAlbum(id: string, token: string) {
    deleteItem(id, token, this.url);
  }
}
