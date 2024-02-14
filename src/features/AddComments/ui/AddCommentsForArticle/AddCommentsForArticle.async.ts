import { lazy } from 'react';

export const AddCommentsForArticleAsync = lazy(() => new Promise((resolve) =>
    /* eslint-disable implicit-arrow-linebreak */
    /* eslint-disable no-promise-executor-return */
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentsForArticle')), 1500)));
