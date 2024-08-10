import { Metadata, NextPage } from 'next';

import { Appeals } from '@modules/Appeals';

import { IPageParams } from '@shared/types';

export const metadata: Metadata = {
  title: 'Список обращений',
  description: 'Список обращений Itilium',
};

const AppealsPage: NextPage<IPageParams> = ({ searchParams }) => {
  return <Appeals searchParams={searchParams} />;
};

export default AppealsPage;
