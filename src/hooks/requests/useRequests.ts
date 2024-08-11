import { useQuery } from '@tanstack/react-query';

import { RequestsService } from '@services/requests/requests.service';

import {
  IRequest,
  IGetRequestsParams,
} from '@shared/types/requests/requests.types';

export const useRequests = (params: IGetRequestsParams) => {
  const { isLoading: isLoadingRequests, data } = useQuery({
    queryKey: ['get requests', params],
    queryFn: () => {
      return RequestsService.getRequests(params);
    },
    enabled: Boolean(params.username),
    select: ({ requests }): IRequest[] => requests,
  });

  return { isLoadingRequests, requests: data || [] };
};

export const useRequest = (params: IGetRequestsParams) => {
  const { isLoading: isLoadingRequest, data: request } = useQuery({
    queryKey: ['get request', params],
    queryFn: () => {
      return RequestsService.getRequests(params);
    },
    enabled: Boolean(params.username),
    select: ({ requests }): IRequest => requests[0],
  });

  return { isLoadingRequest, request };
};
