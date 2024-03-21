import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesPageInited } from '../../selectors/getArticlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

import { ThunkConfigApi } from '@/app/providers/StoreProvider';
import { ArticleSortTypes, ArticleTypes } from '@/entities/article1';
import { TypesOfOrders } from '@/shared/types/orderTypes';

export const initArticlesList = createAsyncThunk<void, URLSearchParams, ThunkConfigApi<string>>(
    'articlesPage/initArticlesList',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromURL = searchParams.get('order');
            const sortFromURL = searchParams.get('sort');
            const searchFromURL = searchParams.get('search');
            const typeFromURL = searchParams.get('type');

            if (orderFromURL) {
                dispatch(articlesPageActions.setOrder(orderFromURL as TypesOfOrders));
            }
            if (sortFromURL) {
                dispatch(articlesPageActions.setSort(sortFromURL as ArticleSortTypes));
            }
            if (searchFromURL) {
                dispatch(articlesPageActions.setSearch(searchFromURL));
            }
            if (typeFromURL) {
                dispatch(articlesPageActions.setType(typeFromURL as ArticleTypes));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticleList({}));
        }
    },
);
