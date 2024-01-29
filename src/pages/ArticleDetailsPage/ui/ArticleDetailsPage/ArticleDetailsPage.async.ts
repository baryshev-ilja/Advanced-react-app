import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) =>
    /* eslint-disable implicit-arrow-linebreak */
    /* eslint-disable no-promise-executor-return */
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500)));
