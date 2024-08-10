'use client';

import { FC } from 'react';
// import { useParams } from 'next/navigation';
import { Link, usePathname } from '@navigation/*';

// import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';

import MainContainer from '../MainContainer/MainContainer';
// import Navigation from './Navigation/Navigation';

// import MainLogo from '@svg/main_logo.svg';

const MainHeader: FC = () => {
  // const { user, admin } = useAuthorizedUser()

  // const pathname = usePathname();
  // const params = useParams();

  // const excludedPaths = ['/'];

  // if (excludedPaths.includes(pathname)) {
  //   return null;
  // }

  return (
    <header className="h-headerHeight bg-white">
      <MainContainer>
        <ul className="flex h-headerHeight w-full items-center justify-between">
          <li>
            <Link href={1 ? '/requests' : '/'}>
              {/* <MainLogo alt="Itilium logo" /> */}
              <div>Itilium</div>
            </Link>
          </li>
        </ul>
      </MainContainer>
    </header>
  );
};

export default MainHeader;
