import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { saveUserJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { User, UserSchema } from '../types/userSchema';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },
        initAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            state._inited = true;
            setFeatureFlags(action.payload.features);
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(saveUserJsonSettings.fulfilled, (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload;
                }
            });
    },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
