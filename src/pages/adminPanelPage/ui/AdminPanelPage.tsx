import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page1';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="Admin-page">
            {t('Админ панель')}
        </Page>
    );
});

export default AdminPanelPage;
