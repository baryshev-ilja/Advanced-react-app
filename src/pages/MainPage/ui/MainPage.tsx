import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'widgets/Page/ui/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page>
            <BugButton />
            {t('home')}
        </Page>
    );
});

export default MainPage;
