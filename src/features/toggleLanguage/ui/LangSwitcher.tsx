import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguagesTypes } from '../model/types/languagesTypes';

import { OptionsList } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        setCurrentLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
    };

    const optionsForLangSelect = useMemo<OptionsList<LanguagesTypes>[]>(() => [
        {
            value: 'ru',
            content: t('Русский'),
        },
        {
            value: 'en',
            content: t('English'),
        },
    ], [t]);
    return (
        <ListBox
            className={cls.fullWidth}
            onChange={toggle}
            currentValue={currentLang}
            items={optionsForLangSelect}
            direction="bottomLeft"
        />
    );
});
