import { getAppealsUrl } from '@config/api.config';

export const AppealsService = {
  async getAppeals(params: any) {
    const searchParams = new URLSearchParams(params).toString();

    const response = await fetch(getAppealsUrl(`?${searchParams}`));

    const data = await response.json();

    if (data.success) {
      return data;
    }

    throw data.message;
  },
};
