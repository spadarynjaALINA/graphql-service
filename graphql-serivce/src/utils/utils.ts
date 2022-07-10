import { NewAlbum, NewArtist, NewBand, NewGenre, NewTrack } from 'src/graphql';
import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';
const favUrl = process.env.FAVOURITES_URL;
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
  item: NewAlbum | NewArtist | NewBand | NewGenre | NewTrack,
  token: string,
  url: AxiosInstance,
) => {
  try {
    const { data } = await url.post('/', item, {
      headers: { Authorization: token },
    });
    return data ? { ...data, id: data._id } : null;
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
    return data ? { ...data, id: data._id } : null;
  } catch (err) {
    console.error(err);
  }
};
export const addFavourites = async (id, token, type) => {
  const { data } = await fav.put(
    '/add',
    { type: type, id: id },
    { headers: { Authorization: token } },
  );
  return data ? { ...data, id: data._id } : null;
};
