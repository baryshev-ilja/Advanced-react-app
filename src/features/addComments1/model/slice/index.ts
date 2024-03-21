import { combineReducers } from '@reduxjs/toolkit';

import { ArticleCommentsSchema } from '../types/index';

import { addCommentFormReducer } from './addCommentFormSlice/addCommentFormSlice';
import { articleCommentsListReducer } from './articleCommentsSlice/articleCommentsSlice';

export const articleCommentsReducer = combineReducers<ArticleCommentsSchema>({
    comments: articleCommentsListReducer,
    commentsForm: addCommentFormReducer,
});
