import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    articleCommentsReducer,
    getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { ReducersList, useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/getArticleCommentsData';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useDynamicReducerLoad({
        reducers,
        removeAfterUnmount: true,
    });

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Страница не найдена(')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.comments} title={t('Комментарии')} size={TextSize.L} />
            <CommentList loading={isLoading} comments={comments} />
        </div>
    );
};

export default ArticleDetailsPage;
