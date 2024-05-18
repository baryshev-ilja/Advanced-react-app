import { createAsyncThunk } from '@reduxjs/toolkit';

import { setUserJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getUserJsonSettings } from '../selectors/getUserJsonSettings';
import { JsonSettings } from '../types/jsonSettings';

import { ThunkConfigApi } from '@/app/providers/StoreProvider';

export const saveUserJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfigApi<string>>(
    'user/saveUserJsonSettings',
    async (newJsonSettings, thunkAPI) => {
        const {
            rejectWithValue, dispatch, getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const currentJsonSettings = getUserJsonSettings(getState());

        if (!userData) {
            return rejectWithValue('Пользователь не авторизован');
        }

        try {
            const response = await dispatch(setUserJsonSettingsMutation({
                userId: userData?.id,
                jsonSettings: {
                    ...currentJsonSettings,
                    ...newJsonSettings,
                },
            })).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('Произошла ошибка в запросе к серверу: нет jsonSettings');
            }

            return response.jsonSettings;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
