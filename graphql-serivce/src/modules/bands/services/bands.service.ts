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
  }

  async getBand(id: string) {
    const url = axios.create({ baseURL: this.baseURL });
   return await getItem(id, url);
  }

  async getBands(limit: number, offset: number) {
    const url = axios.create({ baseURL: this.baseURL });
   return await getItems(limit, offset, url);
  }
  async createBand(band: NewBand, token: string) {
    const url = axios.create({ baseURL: this.baseURL });
   return await createItem(band, token, url);
  }

  async updateBand(id: string, band: UpdateBand, token: string) {
    const url = axios.create({ baseURL: this.baseURL });
   return await updateItem(id, token, url, band);
  }
  async deleteBand(id: string, token: string) {
    const url = axios.create({ baseURL: this.baseURL });
   return await deleteItem(id, token, url);
  }
}
