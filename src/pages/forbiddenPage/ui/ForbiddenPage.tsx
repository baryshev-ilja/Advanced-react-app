import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="Forbidden-page">
            {t('У вас не прав, чтобы зайти на эту страницу')}
        </Page>
    );
});

export default ForbiddenPage;
