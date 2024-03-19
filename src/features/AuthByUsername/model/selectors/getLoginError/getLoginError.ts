import { createSelector } from '@reduxjs/toolkit';

import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError = createSelector(
    getLoginState,
    (loginFormState) => loginFormState?.error,
);
