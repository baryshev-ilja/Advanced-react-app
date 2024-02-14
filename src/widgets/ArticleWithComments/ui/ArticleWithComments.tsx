import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import AddCommentForm from 'features/AddComments/ui/AddCommentForm/AddCommentForm';
import cls from './ArticleWithComments.module.scss';

interface ArticleWithCommentsProps {
    className?: string;
    id: string;
}

export const ArticleWithComments = (props: ArticleWithCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <ArticleDetails id={id} isLoading={isLoading} data={article} />
            {article && <Text className={cls.comments} title={t('Комментарии')} size={TextSize.L} />}
            {article && <AddCommentForm id={id} />}
        </>
    );
};
