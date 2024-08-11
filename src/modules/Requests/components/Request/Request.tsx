import { FC } from 'react';
import { Table } from '@mantine/core';
import { Link } from '@navigation/*';
import { useTranslations } from 'next-intl';

import { getStateColor } from '@utils/requests/getStateColor';
import { padNumber } from '@utils/requests/padNumber';

import { useRelativeTime } from '@hooks/useRelativeTime/useRelativeTime';

import { IRequestProps } from './Request.props';

import Exclamation from '@svg/common/exclamation.svg';

const Request: FC<IRequestProps> = (props) => {
  const { request, searchParams } = props;

  const tc = useTranslations('Common');

  const createdAt = useRelativeTime(request.createdAt);
  const updatedAt = useRelativeTime(request.updatedAt);

  return (
    <Table.Tr className="text-sm font-medium" key={request.number}>
      <Table.Td className="cursor-pointer font-semibold text-blue-700 hover:underline">
        <Link
          href={`requests/${request.number}?${new URLSearchParams(searchParams).toString()}`}
        >
          <div className="flex items-center gap-2">
            <div title={request.topic}>{request.topic}</div>

            {request.awaiting && (
              <Exclamation width="16" height="16" className="text-red-500" />
            )}
          </div>
        </Link>
      </Table.Td>
      <Table.Td>{padNumber(request.number)}</Table.Td>
      <Table.Td>{createdAt}</Table.Td>
      <Table.Td>{updatedAt}</Table.Td>
      <Table.Td>
        {request.createdAt === request.deadlineAt
          ? '-'
          : tc('date time', { date: new Date(request.deadlineAt) })}
      </Table.Td>
      <Table.Td>
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 min-w-2 rounded-full"
            style={{ background: getStateColor(request.stateKey) }}
          />
          <div title={request.state}>{request.state}</div>
        </div>
      </Table.Td>
    </Table.Tr>
  );
};

export default Request;
