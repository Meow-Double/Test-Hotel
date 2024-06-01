import { api } from '../instance';

export const getItems = ({ config }: AxiosRequestConfig) => api.get<ItemResponse>('/items', config);
