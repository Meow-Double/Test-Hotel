import { api } from '../instance';

export type item = {
  id: number;
  title: string;
  country: string;
  city: string;
  rating: number;
};

export type ItemResponse = item[];

export const getItems = ({ config }: AxiosRequestConfig) => {
  api.get<ItemResponse>('/items', config);
};
