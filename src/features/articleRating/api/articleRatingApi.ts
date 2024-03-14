import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '../model/types/rating';

interface GetArticleRateArg {
    articleId: string,
    userId: string,
}

interface ArticleRateMutationArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRate: build.query<Rating[], GetArticleRateArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-rating',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        setArticleRate: build.mutation<void, ArticleRateMutationArg>({
            query: (arg) => ({
                url: '/article-rating',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetRateArticle = articleRatingApi.useGetArticleRateQuery;
export const useRateArticle = articleRatingApi.useSetArticleRateMutation;
