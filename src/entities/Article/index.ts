export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';
export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from './model/selectors/getArticleDetails';
