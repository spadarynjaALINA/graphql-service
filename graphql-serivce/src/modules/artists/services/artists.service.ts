import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewArtist, UpdateArtist } from 'src/graphql';
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from 'src/utils/utils';
@Injectable()
export class ArtistsService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.ARTISTS_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async getArtist(id: string) {
    getItem(id, this.url);
  }

  async getArtists(limit: number, offset: number) {
    getItems(limit, offset, this.url);
  }
  async createArtist(artist: NewArtist, token: string) {
    createItem(artist, token, this.url);
  }

  async updateArtist(id: string, artist: UpdateArtist, token: string) {
    updateItem(id, token, this.url, artist);
  }
  async deleteArtist(id: string, token: string) {
    deleteItem(id, token, this.url);
  }
}
