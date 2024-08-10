import { IS_CLIENT } from '@shared/constants/constants';

export const redirectToHome = () => {
  if (IS_CLIENT) {
    window.location.href = window.location.origin;
  }
};
