'use client';

import { FC } from 'react';

import AuthForm from '../AuthForm/AuthForm';

const Auth: FC = () => {
  return (
    <div className="Auth flex w-full justify-center">
      <AuthForm />
    </div>
  );
};

export default Auth;
