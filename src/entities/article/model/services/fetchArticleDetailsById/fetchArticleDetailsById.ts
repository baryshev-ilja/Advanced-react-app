import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigApi } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleDetailsById = createAsyncThunk<Article, string, ThunkConfigApi<string>>(
    'articleDetails/fetchArticleDetailsById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
