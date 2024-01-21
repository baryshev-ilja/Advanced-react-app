import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = memo(() => {
    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            {t('home')}
        </div>
    );
});

export default MainPage;
