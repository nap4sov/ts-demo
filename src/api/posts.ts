import { axios } from './config';
import { IResponse } from '../interfaces/posts';

export const getAll: Function = async (): Promise<IResponse | Error> => {
  const { data } = await axios.get('/posts');
  return data;
};
