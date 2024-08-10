import { FC, PropsWithChildren } from 'react';
import { usePathname, useRouter } from '@navigation/*';
import { notFound } from 'next/navigation';

import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  // TODO: ЧАСТЬ ЛОГИКИ НАДО ВЫНЕСТИ В middleware.ts ПРИ НАЛИЧИИ ТОКЕНОВ РУЧЕК НА ПРОВЕРКУ АВТОРИЗАЦИИ
  const { user } = useAuthorizedUser();

  const pathname = usePathname();
  const { push } = useRouter();

  const isAuth = Boolean(user);

  if (pathname === '/' && !isAuth) {
    return <>{children}</>;
  }

  if (pathname === '/' && isAuth) {
    push('/requests');
  }

  if (pathname !== '/' && isAuth) {
    return <>{children}</>;
  }

  if (pathname !== '/' && !isAuth) {
    notFound();
  }

  return <>{children}</>;
};

export default AuthProvider;
