import { FC, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) =>
    /* eslint-disable implicit-arrow-linebreak */
    /* eslint-disable no-promise-executor-return */
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500)));
