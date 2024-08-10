import pickBy from 'lodash/pickBy';

import { getRequestsUrl } from '@config/api.config';

export const RequestsService = {
  async getRequests(params: any) {
    const searchParams = new URLSearchParams(
      pickBy(params, Boolean)
    ).toString();

    const response = await fetch(getRequestsUrl(`?${searchParams}`));

    const data = await response.json();

    if (data.success) {
      return data;
    }

    throw data.message;
  },
};
