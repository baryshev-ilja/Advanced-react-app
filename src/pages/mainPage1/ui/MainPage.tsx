import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line baryshewww/layers-import
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/page1';

const MainPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="Main-page">
            <BugButton />
            {t('home')}
        </Page>
    );
});

export default MainPage;
