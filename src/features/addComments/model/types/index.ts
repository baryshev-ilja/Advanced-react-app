import { AddCommentFormSchema } from './AddCommentFormSchema';
import { ArticleCommentsListSchema } from './ArticleCommentsListSchema';

export interface ArticleCommentsSchema {
    comments: ArticleCommentsListSchema;
    commentsForm: AddCommentFormSchema;
}
