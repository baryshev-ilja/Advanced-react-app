import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) =>
    /* eslint-disable implicit-arrow-linebreak */
    /* eslint-disable no-promise-executor-return */
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500)));
