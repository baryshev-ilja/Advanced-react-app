import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { LIST_VIEW_ARTICLES_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
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
        initState: (state) => {
            const view = localStorage.getItem(LIST_VIEW_ARTICLES_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = (view === 'GRID') ? 9 : 4;
            state._inited = true;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions } = articleCommentsSlice;
export const { reducer: articlesPageReducer } = articleCommentsSlice;
