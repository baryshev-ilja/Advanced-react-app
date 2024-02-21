import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('about')}
        </Page>
    );
});

export default AboutPage;
