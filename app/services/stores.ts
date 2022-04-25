import {api} from '@utils/apiUtils';

export const getStoresService = () => api.get('api/v1/stores');

export const getOneStoreService = (storeId: string) =>
  api.get(`api/v1/stores/${storeId}`);

export const getCategoryStoreService = (category: string) =>
  api.get(`api/v1/stores/category/${category}`);
