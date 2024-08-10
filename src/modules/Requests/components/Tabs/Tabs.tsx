'use client';

import { Link } from '@navigation/*';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';

const Tabs: FC = () => {
  const searchParams = useSearchParams();

  const t = useTranslations('Requests');

  const state = searchParams.get('state');

  return (
    <div className="scrollbar-hide justify-between flex gap-4 overflow-x-scroll rounded-full lg:justify-end">
      <Link className="block" href="/requests">
        <div
          className={`flex h-[42px] w-32 items-center justify-center rounded-full px-6 py-2 text-center text-xs font-bold uppercase ${!state ? 'bg-sky-300 text-white' : 'bg-white'}`}
        >
          {t('All')}
        </div>
      </Link>

      <Link className="block" href="/requests?state=open">
        <div
          className={`flex h-10 w-32 items-center justify-center rounded-full px-6 py-2 text-center text-xs font-bold uppercase ${state === 'open' ? 'bg-sky-300 text-white' : 'bg-white'}`}
        >
          {t('Open')}
        </div>
      </Link>

      <Link className="block" href="/requests?state=closed">
        <div
          className={`flex h-10 w-32 items-center justify-center rounded-full px-6 py-2 text-center text-xs font-bold uppercase ${state === 'closed' ? 'bg-sky-300 text-white' : 'bg-white'}`}
        >
          {t('Closed')}
        </div>
      </Link>

      <Link className="block" href="/requests?state=await">
        <div
          className={`flex h-10 w-32 items-center justify-center rounded-full px-6 py-2 text-center text-xs font-bold uppercase ${state === 'await' ? 'bg-sky-300 text-white' : 'bg-white'}`}
        >
          {t('Awaiting response')}
        </div>
      </Link>
    </div>
  );
};

export default Tabs;
