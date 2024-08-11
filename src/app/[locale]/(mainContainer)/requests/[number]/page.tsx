import { Metadata, NextPage } from 'next';

import { Request } from '@modules/Request';

import { IPageParams } from '@shared/types';

export const metadata: Metadata = {
  title: 'Список обращений',
  description: 'Детальная информация по обращению',
};

const RequestPage: NextPage<IPageParams> = ({ params, searchParams }) => {
  return <Request number={Number(params.number)} searchParams={searchParams} />;
};

export default RequestPage;
