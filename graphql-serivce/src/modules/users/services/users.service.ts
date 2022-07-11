import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateUser, Login } from 'src/graphql';
import 'dotenv/config';
@Injectable()
export class UsersService {
  private readonly url: AxiosInstance;
  private baseURL: string;
  constructor() {
    this.baseURL = process.env.USERS_URL;
    this.url = axios.create({ baseURL: this.baseURL });
  }

  async getUser(id: string) {
    try {
      const { data } = await this.url.get(`/${id}`);
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }

  async createUser(user: CreateUser) {
    try {
      const { data } = await this.url.post('/register', user);
      return { ...data, id: data._id };
    } catch (err) {
      console.error(err);
    }
  }
  async login(login: Login) {
    try {
      const { data } = await this.url.post('/login', login);
      return data ? { ...data, id: data._id } : null;
    } catch (err) {
      console.error(err);
    }
  }
}
