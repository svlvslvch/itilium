'use client';

import { ChangeEvent, FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Loader,
  Pagination,
  Portal,
  Select,
  Table,
  TextInput,
} from '@mantine/core';
import map from 'lodash/map';
import chunk from 'lodash/chunk';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';
import { useRequests } from '@hooks/requests/useRequests';

import Request from '../Request/Request';

import { IRequestsProps } from './Requests.props';

import Glass from '@svg/common/glass.svg';
import Cross from '@svg/common/cross.svg';

const Requests: FC<IRequestsProps> = (props) => {
  const { searchParams } = props;

  const t = useTranslations('Requests');
  const { user } = useAuthorizedUser();

  const { isLoadingRequests, requests } = useRequests({
    username: user?.username || '',
    state: searchParams.state,
  });

  const [activePage, setPage] = useState<number>(1);
  const [numberRows, setNumberRows] = useState<number>(8);
  const [searchString, setSearchString] = useState('');

  const filteredRequests = filter(requests, (requests) =>
    includes(requests.topic.toLowerCase(), searchString.toLowerCase())
  );

  const chunks = chunk(searchString ? filteredRequests : requests, numberRows);

  const requestsOnPage = chunks[activePage - 1];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchString(value);
  };

  const handleClearInput = () => {
    setSearchString('');
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const handleChangeNumberRows = (value: string | null) => {
    setNumberRows(Number(value));
  };

  return (
    <>
      <Portal target="#requests-sidebar">
        <TextInput
          className="w-full md:w-1/2 lg:w-1/4"
          radius="xl"
          size="md"
          leftSection={<Glass width="20" height="20" alt="Search glass" />}
          rightSection={
            Boolean(searchString) && (
              <Cross
                width="16"
                height="16"
                alt="Clear"
                className="cursor-pointer hover:text-blue-500"
                onClick={handleClearInput}
              />
            )
          }
          value={searchString}
          onChange={handleSearch}
        />
      </Portal>

      <div className="Requests rounded-lg bg-white px-4 py-2">
        {isLoadingRequests ? (
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
                  <Table.Th className="w-1/5">{t('State')}</Table.Th>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {map(requestsOnPage, (request) => (
                  <Request
                    key={request.number}
                    request={request}
                    searchParams={searchParams}
                  />
                ))}
              </Table.Tbody>

              {(searchString
                ? filteredRequests.length > 8
                : requests.length > 8) && (
                <Table.Caption>
                  <div className="flex justify-between">
                    <div>
                      {(searchString
                        ? filteredRequests.length > numberRows
                        : requests.length > numberRows) && (
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
                        allowDeselect={false}
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

              {requests.length === 0 && (
                <Table.Caption>
                  <div className="text-start">{t('No requests found')}</div>
                </Table.Caption>
              )}
            </Table>
          </Table.ScrollContainer>
        )}
      </div>
    </>
  );
};

export default Requests;
