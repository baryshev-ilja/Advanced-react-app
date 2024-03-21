import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPagePageNum,
} from '../../selectors/getArticlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

import { ThunkConfigApi } from '@/app/providers/StoreProvider';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfigApi<string>>(
    'articlesPage1/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const isLoading = getArticlesPageIsLoading(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPagePageNum(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticleList({}));
        }
    },
);
