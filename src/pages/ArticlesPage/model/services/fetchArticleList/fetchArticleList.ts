import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigApi } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors';

interface fetchArticleListOptions {
    page?: number;
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListOptions, ThunkConfigApi<string>>(
    'articlesPage/fetchArticleList',
    async (props, thunkAPI) => {
        const { page = 1 } = props;
        const { extra, rejectWithValue, getState } = thunkAPI;

        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
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
