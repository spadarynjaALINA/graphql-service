import {
  NewAlbum,
  CreateArtist,
  NewBand,
  NewGenre,
  NewTrack,
} from 'src/graphql';
import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';
const favUrl = process.env.FAVORITES_URL;
const fav = axios.create({
  baseURL: favUrl,
});
export const deleteItem = async (id: string, token: string, url) => {
  try {
    const { data } = await url.delete(`/${id}`, {
      headers: { Authorization: token },
    });

    return data ? { ...data, id: data._id } : null;
  } catch (err) {
    console.error(err);
  }
};

export const updateItem = async (id: string, token: string, url, item) => {
  try {
    const { data } = await url.put(`/${id}`, item, {
      headers: { Authorization: token },
    });
    return data ? { ...data, id: data._id } : null;
  } catch (err) {
    console.error(err);
  }
};
export const createItem = async (
  item: NewAlbum | CreateArtist | NewBand | NewGenre | NewTrack,
  token: string,
  url,
) => {
  try {
    const { data } = await url.post('/', item, {
      headers: { Authorization: token },
    });

    return { ...data, id: data._id };
  } catch (err) {
    console.error(err);
  }
};

export const getItem = async (id: string, url: AxiosInstance) => {
  try {
    const { data } = await url.get(`/${id}`);

    return data ? { ...data, id: data._id } : null;
  } catch (err) {
    console.error(err);
  }
};
export const getItems = async (
  limit: number,
  offset: number,
  url: AxiosInstance,
) => {
  try {
    const { data } = await url.get(`?limit=${limit}&offset=${offset}`);

    data.items = data.items.map((item) => {
      return { ...item, id: item._id };
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const addFavourites = async (
  id: string,
  token: string,
  type: string,
) => {

  const { data } = await fav.put(
    '/add',
    { type, id },
    { headers: { Authorization: token } },
  );
  console.log(data);
  return data ? { ...data, id: data._id } : null;
};
