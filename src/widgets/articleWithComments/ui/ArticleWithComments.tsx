import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from '@/entities/article';
import { Counter } from '@/entities/counter';
import { AddCommentsForArticle } from '@/features/addComments';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';

interface ArticleWithCommentsProps {
    id: string;
}

export const ArticleWithComments = (props: ArticleWithCommentsProps) => {
    const { id } = props;
    const { t } = useTranslation();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);

    const counter = toggleFeatures({
        name: 'isCounterEnabled',
        on: () => <Counter />,
        off: () => null,
    });

    return (
        <VStack gap="32">
            <ArticleDetails id={id} isLoading={isLoading} data={article} />
            {article && (
                <ToggleFeatures
                    name="isArticleRatingEnabled"
                    on={<ArticleRating articleId={id} />}
                    off={<Card>{t('Оценка статьи скоро появится')}</Card>}
                />
            )}
            {article && <ArticleRecommendationList />}
            {article && <AddCommentsForArticle id={id} />}
        </VStack>
    );
};
