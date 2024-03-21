import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleComments?.comments?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articleComments?.commentsForm?.error;
