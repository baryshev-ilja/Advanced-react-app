import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { Page } from '@/widgets/page';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleDetailsEditPageProps {
    className?: string;
}

const ArticleDetailsEditPage = memo((props: ArticleDetailsEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {
                isEdit
                    ? t('Редактирование статьи с ID = ') + id
                    : t('Создание новой статьи')
            }
        </Page>
    );
});

export default ArticleDetailsEditPage;
