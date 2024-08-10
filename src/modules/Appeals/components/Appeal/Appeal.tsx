import { FC } from 'react';
import { Table } from '@mantine/core';

import { IAppealProps } from './Appeal.props';

const Appeal: FC<IAppealProps> = (props) => {
  const { appeal } = props;

  return (
    <Table.Tr key={appeal.number}>
      <Table.Td className="cursor-pointer font-semibold text-blue-700 hover:underline">
        {appeal.topic}
      </Table.Td>
      <Table.Td>{appeal.number}</Table.Td>
      <Table.Td>{appeal.createdAt}</Table.Td>
      <Table.Td>{appeal.updatedAt}</Table.Td>
      <Table.Td>{appeal.deadlineAt}</Table.Td>
      <Table.Td>{appeal.state}</Table.Td>
    </Table.Tr>
  );
};

export default Appeal;
