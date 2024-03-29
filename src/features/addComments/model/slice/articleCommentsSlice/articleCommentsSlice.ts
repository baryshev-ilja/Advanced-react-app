import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleCommentsListSchema } from '../../types/ArticleCommentsListSchema';

import { StateSchema } from '@/app/providers/StoreProvider';
import { CommentType } from '@/entities/comment';

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
});

export const getArticleCommentsList = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments?.comments || commentsAdapter.getInitialState(),
);

const articleCommentsListSlice = createSlice({
    name: 'articleComments',
    initialState: commentsAdapter.getInitialState<ArticleCommentsListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleCommentsListActions } = articleCommentsListSlice;
export const { reducer: articleCommentsListReducer } = articleCommentsListSlice;
