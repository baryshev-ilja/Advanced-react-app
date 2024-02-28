import { combineReducers } from '@reduxjs/toolkit';
import { ArticleCommentsSchema } from '../types/index';
import { articleCommentsListReducer } from './articleCommentsSlice/articleCommentsSlice';
import { addCommentFormReducer } from './addCommentFormSlice/addCommentFormSlice';

export const articleCommentsReducer = combineReducers<ArticleCommentsSchema>({
    comments: articleCommentsListReducer,
    commentsForm: addCommentFormReducer,
});
