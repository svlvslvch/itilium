import { FC } from 'react';
import { Link } from '@navigation/*';
import { useTranslations } from 'next-intl';
import { Button, Checkbox, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import isEmpty from 'lodash/isEmpty';
import delay from 'lodash/delay';

import { useUserStore } from '@store/userStore/useUserStore';
import { IEmailPassword } from '@store/userStore/userStore.types';

const AuthForm: FC = () => {
  const t = useTranslations('AuthPage');

  const login = useUserStore((state) => state.login);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = async (formData: IEmailPassword) => {
    const sendData = {
      login: formData.login.toLowerCase(),
      password: formData.password,
    };

    if (isEmpty(sendData)) {
      return;
    }

    try {
      const response: any = await login(sendData);

      if (response) {
        switch (response) {
          case 'User not found':
            form.setFieldError('login', t('Profile not found'));

            break;
          case 'Wrong password':
            form.setFieldError(
              'password',
              t('Incorrect password Please try again')
            );
            break;
        }

        delay(() => {
          form.clearErrors();
        }, 1300);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="AuthForm flex w-full flex-col justify-center md:max-w-96">
      <div className="text-center text-3xl font-semibold">
        {t('Login to the service')}
      </div>

      <form
        className="mt-8"
        onSubmit={form.onSubmit((values) => onSubmit(values))}
      >
        <TextInput
          className="focus:outline-yellow-500"
          size="lg"
          radius="md"
          placeholder={t('Login')}
          key={form.key('login')}
          {...form.getInputProps('login')}
        />

        <PasswordInput
          className="mt-4"
          size="lg"
          radius="md"
          placeholder={t('Password')}
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <Checkbox
          className="ml-2 mt-6"
          label={t('Remember me')}
          variant="outline"
          size="md"
        />

        <div className="flex justify-center">
          <Button
            className="mt-8 bg-gray-500 hover:bg-gray-600 md:w-fit"
            fullWidth
            type="submit"
            variant="filled"
            size="md"
            radius="xl"
          >
            {t('Log in')}
          </Button>
        </div>
      </form>

      <div className="mt-16 flex justify-center">
        <Link href="/recovery">
          <Button
            type="button"
            className="font-bold uppercase text-blue-600 hover:text-blue-700"
            variant="transparent"
          >
            {t('Forgot your password?')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
