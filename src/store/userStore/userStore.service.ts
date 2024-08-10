import { getAuthUrl } from '@config/api.config';

import { getContentTypeHeader } from '@api/api.helper';

export const StoreService = {
  async login(login: string, password: string) {
    const response = await fetch(getAuthUrl('/login'), {
      method: 'POST',
      headers: getContentTypeHeader(),
      body: JSON.stringify({ login, password }),
    });

    const data = await response.json();

    if (data.success) {
      return data;
    }

    throw data.message;
  },
};
