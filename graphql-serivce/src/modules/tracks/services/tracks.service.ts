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
@Injectable()
export class TracksService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.TRACKS_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async getTrack(id: string) {
    getItem(id, this.url);
  }

  async getTracks(limit: number, offset: number) {
    getItems(limit, offset, this.url);
  }
  async createTrack(track: NewTrack, token: string) {
    createItem(track, token, this.url);
  }

  async updateTrack(id: string, track: UpdateTrack, token: string) {
    updateItem(id, token, this.url, track);
  }
  async deleteTrack(id: string, token: string) {
    deleteItem(id, token, this.url);
  }
}
