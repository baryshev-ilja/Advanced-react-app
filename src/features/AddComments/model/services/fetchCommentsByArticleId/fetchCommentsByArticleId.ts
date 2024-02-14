import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigApi } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<CommentType[], string | undefined, ThunkConfigApi<string>>(
    'addCommentForm/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<CommentType[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!articleId) {
                return rejectWithValue('error');
            }

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
