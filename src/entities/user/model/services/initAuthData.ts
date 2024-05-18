import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/userSchema';

import { ThunkConfigApi } from '@/app/providers/StoreProvider';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfigApi<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, dispatch,
        } = thunkAPI;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('Пользователь не авторизован');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            if (!response) {
                return rejectWithValue('Произошла ошибка в запросе к серверу: нет jsonSettings');
            }

            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                response.features?.isAppRedesigned ? 'new' : 'old',
            );

            return response;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
