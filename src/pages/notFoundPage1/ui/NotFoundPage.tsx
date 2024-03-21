import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/page1';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page
            className={classNames(cls.notFoundPage, {}, [className])}
            data-testid="no-found-page"
        >
            {t('Страница не найдена')}
        </Page>
    );
});
