/* eslint-disable no-param-reassign */
import {create} from 'apisauce';
import {storageRead} from '@utils/storageUtils';
// import { encryptedRead } from '@tils/keychainUtils';

export const api = create({
  baseURL: 'http://localhost:3000',
});

api.axiosInstance.interceptors.request.use(
  async config => {
    // Do something before request is sent
    const accessToken = await storageRead('accessToken');
    // const country = await storageRead('country');
    // const language = await storageRead('appLang');
    // const enA = await encryptedRead();
    // config.params['country'] = country.alpha2Code;
    // config.params['lang'] = language;
    // console.log('accessToken', accessToken);
    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `${accessToken}`;
    }
    // console.log('config', config);
    return config;
  },
  error => Promise.reject(error),
);
