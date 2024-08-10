'use client';

import { FC } from 'react';
import { Link } from '@navigation/*';

import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';

import MainContainer from '../MainContainer/MainContainer';

import Navigation from './Navigation/Navigation';

import MainLogo from '@svg/main_logo.svg';

const MainHeader: FC = () => {
  const { user } = useAuthorizedUser();

  return (
    <header className="h-headerHeight bg-white">
      <MainContainer>
        <ul className="flex h-headerHeight w-full items-center justify-between">
          <li>
            <Link href={user ? '/requests' : '/'}>
              <MainLogo width="114" height="34" alt="Itilium logo" />
            </Link>
          </li>

          {user && <Navigation user={user} />}
        </ul>
      </MainContainer>
    </header>
  );
};

export default MainHeader;
