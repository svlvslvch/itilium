'use client';

import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Loader, Portal } from '@mantine/core';
import { Link } from '@navigation/*';

import { padNumber } from '@utils/requests/padNumber';
import { getStateColor } from '@utils/requests/getStateColor';

import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';
import { useRequest } from '@hooks/requests/useRequests';

import { IRequestProps } from './Request.props';

import ArrowDown from '@svg/common/arrow_down.svg';

const Request: FC<IRequestProps> = (props) => {
  const { number, searchParams } = props;

  const t = useTranslations('Request');
  const { user } = useAuthorizedUser();

  const { isLoadingRequest, request } = useRequest({
    username: user?.username || '',
    number,
  });

  const [showMore, setShowMore] = useState(false);

  const handleChangeShowMore = () => {
    setShowMore((state) => !state);
  };

  return (
    <>
      <Portal target="#requests-sidebar">
        <Link
          href={`/requests?${new URLSearchParams(searchParams).toString()}`}
        >
          <Button
            className="bg-white text-slate-800 hover:bg-gray-200 hover:text-slate-800 md:w-fit"
            fullWidth
            variant="filled"
            size="md"
            radius="xl"
          >
            {'Назад'}
          </Button>
        </Link>
      </Portal>

      <div className="Request relative rounded-lg bg-white p-4 md:p-6">
        {isLoadingRequest && !request ? (
          <div className="flex w-full items-center justify-center">
            <Loader className="mx-auto" color="lime" />
          </div>
        ) : request ? (
          <>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="flex-1">
                <div className="text-xs text-gray-500">
                  {t('Request № {number} from {date}', {
                    number: padNumber(request.number),
                    date: new Date(request.createdAt),
                  })}
                </div>
                <div
                  className="mt-1 text-lg font-semibold"
                  title={request.topic}
                >
                  {request.topic}
                </div>

                <div className="mt-3 text-sm" title={request.description}>
                  {request.description}
                </div>
              </div>

              <div className="w-2/6">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div
                    className="h-2 w-2 min-w-2 rounded-full"
                    style={{ background: getStateColor(request.stateKey) }}
                  />
                  <div>{request.state}</div>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-gray-500">{t('Deadline')}</div>
                  <div className="mt-1 text-sm font-medium">
                    {t('date time', { date: new Date(request.deadlineAt) })}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-xs text-gray-500">{t('Solution')}</div>
                  <div className="mt-1 text-sm font-medium">
                    {request.solution || '-'}
                  </div>
                </div>

                {showMore && (
                  <>
                    <div className="mt-3">
                      <div className="text-xs text-gray-500">
                        {t('Service')}
                      </div>
                      <div className="mt-1 text-sm font-medium">
                        {request.service || '-'}
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-xs text-gray-500">
                        {t('Composition of the service')}
                      </div>
                      <div className="mt-1 text-sm font-medium">
                        {request.composition}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div
              className={`absolute bottom-0 left-1/2 flex -translate-x-1/2 cursor-pointer items-center justify-center rounded-b-full bg-sky-100 px-2 py-2 hover:pt-3 ${showMore ? 'rotate-180' : 'translate-y-full'}`}
              onClick={handleChangeShowMore}
            >
              <ArrowDown width="20" height="20" alt="Show more" />
            </div>
          </>
        ) : (
          <div>{t('Sorry, no request found')}</div>
        )}
      </div>
    </>
  );
};

export default Request;
