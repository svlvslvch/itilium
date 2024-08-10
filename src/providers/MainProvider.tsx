'use client';

import { FC, PropsWithChildren } from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { MantineProvider } from '@mantine/core';

import AuthProvider from './AuthProvider/AuthProvider';

interface IMainProviderProps extends PropsWithChildren {
  locale: string;
  messages: AbstractIntlMessages;
}

const MainProvider: FC<IMainProviderProps> = ({
  children,
  locale,
  messages,
}) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <NextIntlClientProvider
      timeZone={userTimeZone}
      locale={locale}
      messages={messages}
    >
      <MantineProvider>
        <AuthProvider>{children}</AuthProvider>
      </MantineProvider>
    </NextIntlClientProvider>
  );
};

export default MainProvider;
