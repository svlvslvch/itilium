'use client';

import { ChangeEvent, FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Loader, Pagination, Select, Table } from '@mantine/core';
import map from 'lodash/map';
import chunk from 'lodash/chunk';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';
import { useAppeals } from '@hooks/appeals/useAppeals';

import Appeal from '../Appeal/Appeal';

import { IAppealsProps } from './Appeals.props';

const Appeals: FC<IAppealsProps> = (props) => {
  const { searchParams } = props;

  const t = useTranslations('Appeals');
  const { user } = useAuthorizedUser();

  const { isLoadingAppeals, appeals } = useAppeals({
    username: user?.username || '',
  });

  const [activePage, setPage] = useState<number>(1);
  const [numberRows, setNumberRows] = useState<number>(8);
  const [searchString, setSearchString] = useState('');

  const filteredAppeals = filter(appeals, (appeals) =>
    includes(appeals.topic.toLowerCase(), searchString.toLowerCase())
  );

  const chunks = chunk(searchString ? filteredAppeals : appeals, numberRows);

  const appealsOnPage = chunks[activePage - 1];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchString(value);
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const handleChangeNumberRows = (value: string | null) => {
    setNumberRows(Number(value));
  };

  return (
    <div className="rounded-lg bg-white px-4 py-2">
      {isLoadingAppeals ? (
        <div className="flex w-full items-center justify-center">
          <Loader className="mx-auto" color="lime" />
        </div>
      ) : (
        <Table.ScrollContainer minWidth={800}>
          <Table
            highlightOnHover={true}
            highlightOnHoverColor="#f8fafc"
            horizontalSpacing={'sm'}
            verticalSpacing="md"
          >
            <Table.Thead className="text-xs font-normal text-gray-500">
              <Table.Tr>
                <Table.Th className="w-2/5">{t('Topic')}</Table.Th>
                <Table.Th>{t('Number')}</Table.Th>
                <Table.Th>{t('Creation date')}</Table.Th>
                <Table.Th>{t('Date modified')}</Table.Th>
                <Table.Th>{t('Deadline')}</Table.Th>
                <Table.Th>{t('State')}</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {map(appealsOnPage, (appeal) => (
                <Appeal key={appeal.number} appeal={appeal} />
              ))}
            </Table.Tbody>

            {appeals.length > 8 && (
              <Table.Caption>
                <div className="flex justify-between">
                  <div>
                    {appeals.length > numberRows && (
                      <Pagination
                        className="!mt-0"
                        total={chunks.length}
                        value={activePage}
                        onChange={handleChangePage}
                        mt="sm"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span>{t('Display lines:')}</span>

                    <Select
                      data={['8', '16', '32']}
                      className="w-20"
                      checkIconPosition="right"
                      value={String(numberRows)}
                      onChange={handleChangeNumberRows}
                    />
                  </div>
                </div>
              </Table.Caption>
            )}
          </Table>
        </Table.ScrollContainer>
      )}
    </div>
  );
};

export default Appeals;
