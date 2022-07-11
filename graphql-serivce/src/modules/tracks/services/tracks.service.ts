import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewTrack, UpdateTrack } from 'src/graphql';
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from 'src/utils/utils';
import 'dotenv/config';
@Injectable()
export class TracksService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.TRACKS_URL;

  }

  async getTrack(id: string) {
     const url = axios.create({ baseURL: this.baseURL });
   return await getItem(id, url);
  }

  async getTracks(limit: number, offset: number) {
    const url = axios.create({ baseURL: this.baseURL });
   return await getItems(limit, offset, url);
  }
  async createTrack(track: NewTrack, token: string) {
    const url = axios.create({ baseURL: this.baseURL });
   return await
    createItem(track, token, url);
  }

  async updateTrack(id: string, track: UpdateTrack, token: string) {
    const url = axios.create({ baseURL: this.baseURL });
   return await
    updateItem(id, token, url, track);
  }
  async deleteTrack(id: string, token: string) {
    const url = axios.create({ baseURL: this.baseURL });
   return await
    deleteItem(id, token, url);
  }
}
