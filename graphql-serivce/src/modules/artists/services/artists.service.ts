import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateArtist, UpdateArtist } from 'src/graphql';
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from 'src/utils/utils';
import 'dotenv/config';
@Injectable()
export class ArtistsService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getArtist(id: string) {
     const url = axios.create({ baseURL: this.baseURL })
   return await getItem(id, url);
  }

  async getArtists(limit: number, offset: number) {
    const url = axios.create({ baseURL: this.baseURL })
  return await  getItems(limit, offset, url);
  }

  async newArtist(artist: CreateArtist, token: string) {
     const url =axios.create({ baseURL: this.baseURL });
   return await createItem(artist, token, url);
  }

  async updateArtist(id: string, updateArtist: UpdateArtist, token: string) {

    const url =axios.create({ baseURL: this.baseURL });
   return await updateItem(id, token, url, updateArtist);
  }

  async deleteArtist(id: string, token: string) {
    const url =axios.create({ baseURL: this.baseURL });
    deleteItem(id, token, url);
  }
}
