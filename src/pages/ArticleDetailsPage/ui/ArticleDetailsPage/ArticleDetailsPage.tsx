import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleWithComments } from 'widgets/ArticleWithComments';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();

    const onButtonBackHandler = useCallback(() => {
        navigate(`${RoutePaths.articles}`);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Страница не найдена(')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <Button
                className={cls.toBackArticles}
                onClick={onButtonBackHandler}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Вернуться к списку статей')}
            </Button>
            <ArticleWithComments id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
