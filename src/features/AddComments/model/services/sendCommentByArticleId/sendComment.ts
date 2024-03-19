import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

import { ThunkConfigApi } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/article';
import { CommentType } from '@/entities/comment';
import { getUserAuthData } from '@/entities/user';

export const sendComment = createAsyncThunk<CommentType, string, ThunkConfigApi<string>>(
    'addCommentForm/sendComment',
    async (text, thunkAPI) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<CommentType>('/comments', {
                userId: userData.id,
                articleId: article.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
