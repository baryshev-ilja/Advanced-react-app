import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) =>
    /* eslint-disable implicit-arrow-linebreak */
    /* eslint-disable no-promise-executor-return */
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500)));
