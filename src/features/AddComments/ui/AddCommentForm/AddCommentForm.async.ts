import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise((resolve) =>
    /* eslint-disable implicit-arrow-linebreak */
    /* eslint-disable no-promise-executor-return */
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500)));
