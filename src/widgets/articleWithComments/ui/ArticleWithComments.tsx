import { useSelector } from 'react-redux';

import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from '@/entities/article';
import { Counter } from '@/entities/counter';
import { AddCommentsForArticle } from '@/features/addComments';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { getFeatureFlag } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/Stack';

interface ArticleWithCommentsProps {
    id: string;
}

export const ArticleWithComments = (props: ArticleWithCommentsProps) => {
    const { id } = props;
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);

    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    return (
        <VStack gap="32">
            <ArticleDetails id={id} isLoading={isLoading} data={article} />
            {article && isArticleRatingEnabled && <ArticleRating articleId={id} />}
            {isCounterEnabled && <Counter />}
            {article && <ArticleRecommendationList />}
            {article && <AddCommentsForArticle id={id} />}
        </VStack>
    );
};
