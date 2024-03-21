import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfigApi } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/user1';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfigApi<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
