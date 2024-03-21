import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticlesPageLimit,
    getArticlesPageOrder,
    getArticlesPagePageNum,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/getArticlesPageSelectors';

import { ThunkConfigApi } from '@/app/providers/StoreProvider';
import { Article, ArticleTypes } from '@/entities/article1';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

interface fetchArticleListOptions {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListOptions, ThunkConfigApi<string>>(
    'articlesPage1/fetchArticleList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPagePageNum(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort,
                order,
                search,
                type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _sort: sort,
                    _order: order,
                    _limit: limit,
                    q: search,
                    type: type === ArticleTypes.ALL ? undefined : type,
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
