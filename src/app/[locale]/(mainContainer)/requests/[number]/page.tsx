import { Metadata, NextPage } from 'next';

import { Requests } from '@modules/Requests';

import { IPageParams } from '@shared/types';

export const metadata: Metadata = {
  title: 'Список обращений',
  description: 'Детальная информация по обращению',
};

const RequestPage: NextPage<IPageParams> = ({ params, searchParams }) => {
  return <Requests searchParams={searchParams} />;
};

export default RequestPage;
