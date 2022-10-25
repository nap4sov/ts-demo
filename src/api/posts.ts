import { axios } from './config';
import { IResponse, IPostDetails } from '../interfaces/posts';

export const getAll = async (): Promise<IResponse | Error> => {
  const { data } = await axios.get('/posts');
  return data;
};

export const getDetails = async (id: string): Promise<IPostDetails> => {
  const { data } = await axios.get(`/posts/${id}`);
  return data;
};

export const setLikes = async (id: string): Promise<void> => {
  await axios.put(`/posts/like/${id}`);
};
