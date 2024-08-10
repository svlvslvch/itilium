import { FC } from 'react';
import Image from 'next/image';
import { Link } from '@navigation/*';
import { Button, Menu } from '@mantine/core';
import { useTranslations } from 'next-intl';

import { useUserStore } from '@store/userStore/useUserStore';

import { INavigationProps } from './Navigation.props';

import Person from '@svg/common/person.svg';
import Plus from '@svg/common/plus.svg';
import Exit from '@svg/common/exit.svg';

const Navigation: FC<INavigationProps> = (props) => {
  const { user } = props;

  const t = useTranslations('Navigation');

  const logout = useUserStore((state) => state.logout);

  return (
    <>
      <li className="hidden sm:block">
        <div className="flex gap-8">
          <Link href="/notifications">
            <div className="text-xs font-semibold uppercase">
              {t('Notifications')}
            </div>
          </Link>
          <Link href="/requests">
            <div className="text-xs font-semibold uppercase">
              {t('Requests')}
            </div>
          </Link>
        </div>
      </li>

      <li className="flex items-center gap-6">
        <Button
          className="hidden bg-gray-500 hover:bg-gray-600 md:block md:w-fit"
          fullWidth
          variant="filled"
          radius="xl"
          leftSection={<Plus width="20" height="20" alt={t('Log out')} />}
        >
          {t('New request')}
        </Button>

        <Menu shadow="md" position="bottom-end" offset={12} width={200}>
          <Menu.Target>
            <div className="relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-yellow-200 text-gray-500">
              {user.image ? (
                <Image src={user.image} alt="User avatar" fill priority />
              ) : (
                <Person width="24" height="24" alt="Default user avatar" />
              )}
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item className="sm:hidden">
              <Link href="/notifications">{t('Notifications')}</Link>
            </Menu.Item>

            <Menu.Item className="sm:hidden">
              <Link href="/requests">{t('Requests')}</Link>
            </Menu.Item>

            <Menu.Divider className="sm:hidden" />

            <Menu.Item className="md:hidden">{t('New request')}</Menu.Item>

            <Menu.Divider className="md:hidden" />

            <Menu.Item
              leftSection={<Exit width="24" height="24" alt={t('Log out')} />}
              onClick={() => logout()}
            >
              {t('Log out')}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </li>
    </>
  );
};

export default Navigation;
