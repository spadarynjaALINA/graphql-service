import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewBand, UpdateBand } from 'src/graphql';
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from 'src/utils/utils';
import 'dotenv/config';
@Injectable()
export class BandsService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.BANDS_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async getBand(id: string) {
    getItem(id, this.url);
  }

  async getBands(limit: number, offset: number) {
    getItems(limit, offset, this.url);
  }
  async createBand(band: NewBand, token: string) {
    createItem(band, token, this.url);
  }

  async updateBand(id: string, band: UpdateBand, token: string) {
    updateItem(id, token, this.url, band);
  }
  async deleteBand(id: string, token: string) {
    deleteItem(id, token, this.url);
  }
}
