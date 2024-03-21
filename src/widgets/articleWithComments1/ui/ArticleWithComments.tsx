import { useSelector } from 'react-redux';

import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from '@/entities/article1';
import { AddCommentsForArticle } from '@/features/addComments1';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { VStack } from '@/shared/ui/Stack';

interface ArticleWithCommentsProps {
    id: string;
}

export const ArticleWithComments = (props: ArticleWithCommentsProps) => {
    const { id } = props;
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);

    return (
        <VStack gap="32">
            <ArticleDetails id={id} isLoading={isLoading} data={article} />
            {article && <ArticleRating articleId={id} />}
            {article && <ArticleRecommendationList />}
            {article && <AddCommentsForArticle id={id} />}
        </VStack>
    );
};
