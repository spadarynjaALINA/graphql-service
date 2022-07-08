import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewArtist } from 'src/graphql';
@Injectable()
export class ArtistsService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
  constructor() {
    this.baseURL = process.env.ARTISTS_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async getArtist(id: string, token: string) {
    try {
      const { data } = await this.url.get(`/${id}`, {
        headers: { Authorization: token },
      });
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }

  async getArtists(limit: number, offset: number) {
    try {
      const { data } = await this.url.get(`?limit=${limit}&offset=${offset}`);
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }
  async createArtist(artist: NewArtist, token: string) {
    try {
      const { data } = await this.url.post('/', artist, {
        headers: { Authorization: token },
      });
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }
}
