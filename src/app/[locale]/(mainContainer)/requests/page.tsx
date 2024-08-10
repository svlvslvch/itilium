import { Metadata, NextPage } from 'next';

import { Requests } from '@modules/Requests';

import { IPageParams } from '@shared/types';

export const metadata: Metadata = {
  title: 'Список обращений',
  description: 'Список обращений Itilium',
};

const RequestsPage: NextPage<IPageParams> = ({ searchParams }) => {
  return <Requests searchParams={searchParams} />;
};

export default RequestsPage;
