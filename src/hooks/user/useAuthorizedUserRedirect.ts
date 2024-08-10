import { useEffect, useState } from 'react';
import { useRouter } from '@navigation/*';

import { useAuthorizedUser } from './useAuthorizedUser';

export const useAuthorizedUserRedirect = () => {
  const [isRender, setIsRender] = useState<boolean>(false);

  const { push } = useRouter();
  const { user } = useAuthorizedUser();

  useEffect(() => {
    if (user) {
      push('/requests');

      return;
    }

    setIsRender(true);
  }, [user, push]);

  return isRender;
};
