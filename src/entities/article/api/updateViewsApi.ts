import { rtkApi } from '@/shared/api/rtkApi';

interface UpdateViewsApiOptions {
    articleId: string;
    views: number;
}

const updateViewsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateViewsOfArticle: build.mutation<void, UpdateViewsApiOptions>({
            query: ({ articleId, views }) => ({
                url: `/articles/${articleId}`,
                method: 'PATCH',
                body: {
                    views,
                },
            }),
        }),
    }),
});

export const useUpdateViewsApi = updateViewsApi.useUpdateViewsOfArticleMutation;
