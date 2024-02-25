import { combineReducers } from '@reduxjs/toolkit';
import { ArticleCommentsSchema } from 'features/AddComments';
import { articleCommentsListReducer } from 'features/AddComments/model/slice/articleCommentsSlice/articleCommentsSlice';
import { addCommentFormReducer } from 'features/AddComments/model/slice/addCommentFormSlice/addCommentFormSlice';

export const articleCommentsReducer = combineReducers<ArticleCommentsSchema>({
    comments: articleCommentsListReducer,
    commentsForm: addCommentFormReducer,
});
