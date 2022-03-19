import {api} from '@utils/apiUtils';

export const signupService = (registerBody: object) =>
  api.post('api/v1/auth/register', registerBody);

export const loginService = (loginBody: object) =>
  api.post('api/v1/auth/login', loginBody);
