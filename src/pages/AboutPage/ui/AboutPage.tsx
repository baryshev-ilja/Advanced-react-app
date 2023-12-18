import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('about')}
            <Counter />
        </div>
    );
};

export default AboutPage;
