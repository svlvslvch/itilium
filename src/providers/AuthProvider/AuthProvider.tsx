import { FC, PropsWithChildren } from 'react';
import { usePathname } from '@navigation/*';

import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';

import NotFound from '@components/NotFound/NotFound';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  // TODO: ЧАСТЬ ЛОГИКИ НАДО ВЫНЕСТИ В middleware.ts ПРИ НАЛИЧИИ ТОКЕНОВ РУЧЕК НА ПРОВЕРКУ АВТОРИЗАЦИИ
  // ТАК ПРОВЕРКА АВТОРИЗАЦИИ БУДЕН НА СТОРОНЕ СЕРВЕРА
  const { user } = useAuthorizedUser();

  const pathname = usePathname();

  const isAuth = Boolean(user);

  if (pathname !== '/' && !isAuth) {
    return <NotFound />;
  }

  return <>{children}</>;
};

export default AuthProvider;
