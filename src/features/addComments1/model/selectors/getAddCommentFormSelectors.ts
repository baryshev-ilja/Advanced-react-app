import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) => state.articleComments?.commentsForm?.text ?? '';
export const getAddCommentFormError = (state: StateSchema) => state.articleComments?.commentsForm?.error;
