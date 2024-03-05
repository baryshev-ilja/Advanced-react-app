import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsRecommendations?.isLoading || false;
};
export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsRecommendations?.error || undefined;
};
