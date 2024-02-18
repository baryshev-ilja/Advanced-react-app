import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { article } from 'shared/mock/articleData';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticleList
                articles={
                    new Array(9).fill(0).map((item, index) => ({
                        ...article,
                        id: String(index),
                    }))
                }
                view="LIST"
            />
        </div>
    );
};

export default ArticlesPage;
