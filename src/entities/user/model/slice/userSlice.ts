import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from '../types/userSchema';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
