import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';

import { getArticleDetailsData } from '@/entities/article1';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

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
        navigate(`${AppRoutePaths.articles()}`);
    }, [navigate]);

    const onButtonEditHandler = useCallback(() => {
        if (article) {
            navigate(`${AppRoutePaths.articlesDetails(article.id)}`);
        }
    }, [article, navigate]);

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
