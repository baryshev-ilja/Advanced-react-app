import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigApi } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

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
