import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAll, getDetails } from '../api/posts';
import { IResponse, IPostDetails } from '../interfaces/posts';

export const useGetAllPosts = (): UseQueryResult<IResponse> =>
  useQuery(['posts'], () => getAll());

export const useGetPostDetails = (id: string): UseQueryResult<IPostDetails> =>
  useQuery(['posts', id], () => getDetails(id));
