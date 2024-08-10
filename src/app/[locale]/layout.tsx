import { ReactNode } from 'react';
import { Metadata } from 'next';
import {
  getMessages,
  unstable_setRequestLocale as unstableSetRequestLocale,
} from 'next-intl/server';
import { locales } from '@navigation/*';

import MainProvider from '@providers/MainProvider';

import MainHeader from '@components/MainHeader/MainHeader';

import { openSans } from '@shared/fonts/fonts';

export interface IProps {
  /**
   * Дочерние элементы.
   */
  children: ReactNode;
  /**
   * Параметр, который указывает на локализацию для отображения контента.
   */
  params: { locale: string };
}

export const generateStaticParams = async () => {
  return locales.map((locale) => ({ locale }));
};

export const metadata: Metadata = {
  title: {
    template: `%s | Itilium`,
    default: 'Itilium',
  },
  description: 'Личный кабинет Itilium',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: IProps) {
  unstableSetRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={openSans.variable}>
        <MainProvider locale={locale} messages={messages}>
          <MainHeader />
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
