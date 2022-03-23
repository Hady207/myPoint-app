import {create} from 'apisauce';
import {storageRead} from '@utils/storageUtils';

export const api = create({
  baseURL: 'https://my-point-207.herokuapp.com/',
});

api.axiosInstance.interceptors.request.use(
  async config => {
    // Do something before request is sent
    const accessToken = await storageRead('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);
