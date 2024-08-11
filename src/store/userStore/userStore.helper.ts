import Cookies from 'js-cookie';

import { IS_CLIENT } from '@shared/constants/constants';

import { ILoginResponse } from './userStore.types';

export const saveTokenToStorage = (data: ILoginResponse) => {
  // Cookies.set('accessToken', data.tokens.accessToken);
  Cookies.set('accessToken', 'plug_access_token');
};

export const removeToStorage = () => {
  Cookies.remove('accessToken');
};

export const redirectToHome = () => {
  if (IS_CLIENT) {
    window.location.href = window.location.origin;
  }
};
