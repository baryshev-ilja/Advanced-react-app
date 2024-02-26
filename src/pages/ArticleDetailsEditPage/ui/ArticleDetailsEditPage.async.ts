import { lazy } from 'react';

export const ArticleDetailsEditPageAsync = lazy(() => new Promise((resolve) =>
    /* eslint-disable implicit-arrow-linebreak */
    /* eslint-disable no-promise-executor-return */
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsEditPage')), 1500)));
