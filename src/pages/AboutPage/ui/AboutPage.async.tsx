import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) =>
    /* eslint-disable implicit-arrow-linebreak */
    /* eslint-disable no-promise-executor-return */
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500)));
