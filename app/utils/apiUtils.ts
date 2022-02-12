import {create} from 'apisauce';
import {storageRead} from '@utils/storageUtils';

export const api = create({
  baseURL: 'http://localhost:3000',
});

api.axiosInstance.interceptors.request.use(
  async config => {
    // Do something before request is sent
    const accessToken = await storageRead('accessToken');

    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);
