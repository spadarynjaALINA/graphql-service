import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewBand, UpdateBand } from 'src/graphql';
@Injectable()
export class BandsService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.BANDS_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async getBand(id: string) {
    try {
      const { data } = await this.url.get(`/${id}`);
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }

  async getBands(limit: number, offset: number) {
    try {
      const { data } = await this.url.get(`?limit=${limit}&offset=${offset}`);
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }
  async createBand(band: NewBand, token: string) {
    try {
      const { data } = await this.url.post('/', band, {
        headers: { Authorization: token },
      });
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }

  async updateBand(id: string, band: UpdateBand, token: string) {
    try {
      const { data } = await this.url.put(`/${id}`, band, {
        headers: { Authorization: token },
      });
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }
  async deleteBand(id: string, token: string) {
    try {
      const { data } = await this.url.delete(`/${id}`, {
        headers: { Authorization: token },
      });
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }
}
