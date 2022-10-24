import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAll } from '../api/posts';
import { IResponse } from '../interfaces/posts';

export const useGetAllPosts = (): UseQueryResult<IResponse> =>
  useQuery(['posts'], () => getAll());
