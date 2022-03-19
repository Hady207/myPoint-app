import {api} from '@utils/apiUtils';

export const getStoresService = () => api.get(`stores`);
