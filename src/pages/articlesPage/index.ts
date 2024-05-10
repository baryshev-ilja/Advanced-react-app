export {
    ArticlesPageAsync as ArticlesPage,
} from './ui/ArticlesPage/ArticlesPage.async';
export type { ArticlesPageSchema } from './model/types/ArticlesPageSchema';
export { getArticlesPageView } from './model/selectors/getArticlesPageSelectors';
export { articlesPageActions } from './model/slice/articlesPageSlice';
export { ArticlesPageSkeleton } from './ui/ArticlesPageSkeleton/ArticlesPageSkeleton';
