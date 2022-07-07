import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateUser, Login } from 'src/graphql';
@Injectable()
export class UsersService {
  private readonly url: AxiosInstance;
  private readonly baseURL: string;
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
      return data ? { ...data, id: data._id } : null;
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
