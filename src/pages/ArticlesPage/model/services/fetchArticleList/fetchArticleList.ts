import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigApi } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfigApi<string>>(
    'articlesPage/fetchArticleList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
