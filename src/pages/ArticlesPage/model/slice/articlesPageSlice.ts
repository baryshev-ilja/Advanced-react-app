import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { LIST_VIEW_ARTICLES_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticleSortTypes } from 'entities/Article/model/types/article';
import { TypesOfOrders } from 'shared/types';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleComments = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        view: 'GRID',
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        limit: 9,
        order: 'asc',
        sort: ArticleSortTypes.CREATED,
        search: '',
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LIST_VIEW_ARTICLES_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<TypesOfOrders>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortTypes>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(LIST_VIEW_ARTICLES_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = (view === 'GRID') ? 9 : 4;
            state._inited = true;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length > 0;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action);
                } else {
                    articlesAdapter.addMany(state, action);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions } = articleCommentsSlice;
export const { reducer: articlesPageReducer } = articleCommentsSlice;