import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigApi } from 'app/providers/StoreProvider';
import { Article } from 'entities/article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfigApi<string>>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 4,
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
