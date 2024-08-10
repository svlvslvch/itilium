import { useQuery } from '@tanstack/react-query';

import { AppealsService } from '@services/appeals/appeals.service';

import {
  IAppeal,
  IGetAppealsParams,
} from '@shared/types/appeals/appeals.types';

export const useAppeals = (params: IGetAppealsParams) => {
  const { isLoading: isLoadingAppeals, data } = useQuery({
    queryKey: ['get  appeals', params.number],
    queryFn: () => {
      return AppealsService.getAppeals(params);
    },
    enabled: Boolean(params.username),
    select: ({ appeals }): IAppeal[] => appeals,
  });

  return { isLoadingAppeals, appeals: data || [] };
};
