import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from 'entities/article';
import { useSelector } from 'react-redux';
import { AddCommentsForArticle } from 'features/addComments';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationList } from 'features/articleRecommendationList';

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
            {article && <ArticleRecommendationList />}
            {article && <AddCommentsForArticle id={id} />}
        </VStack>
    );
};
