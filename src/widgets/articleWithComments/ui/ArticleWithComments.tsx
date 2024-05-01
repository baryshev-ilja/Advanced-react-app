import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from '@/entities/article';
import { AddCommentsForArticle } from '@/features/addComments';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleWithComments.module.scss';

interface ArticleWithCommentsProps {
    id: string;
}

export const ArticleWithComments = (props: ArticleWithCommentsProps) => {
    const { id } = props;
    const { t } = useTranslation();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);

    return (
        <VStack
            gap="32"
            max
            className={
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => `${cls.cardUi}`,
                    off: () => undefined,
                })
            }
        >
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
