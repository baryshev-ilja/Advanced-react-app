import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RoutePaths } from '@/shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/article';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onButtonBackHandler = useCallback(() => {
        navigate(`${RoutePaths.articles}`);
    }, [navigate]);

    const onButtonEditHandler = useCallback(() => {
        navigate(`${RoutePaths.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
            <Button
                className={cls.toBackArticles}
                onClick={onButtonBackHandler}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Вернуться к списку статей')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.toEditArticles}
                    onClick={onButtonEditHandler}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
};
