import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../model/types/country';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { DropdownDirection } from '@/shared/types/ui';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox as ListBoxRedesigned } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (country: Country) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraina, content: Country.Ukraina },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
        direction = 'topRight',
    } = props;
    const { t } = useTranslation('profile');

    const selectChangeHandler = useCallback((value: string) => {
        if (onChange) {
            onChange(value as Country);
        }
    }, [onChange]);

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <ListBoxRedesigned
                    className={classNames('', {}, [className])}
                    currentValue={value}
                    defaultValue={t('Выберите страну')}
                    onChange={selectChangeHandler}
                    items={options}
                    readonly={readonly}
                    direction={direction}
                    label={t('Страна')}
                />
            )}
            off={(
                <ListBoxDeprecated
                    className={classNames('', {}, [className])}
                    currentValue={value}
                    defaultValue={t('Выберите страну')}
                    label={t('Выберите страну')}
                    onChange={selectChangeHandler}
                    items={options}
                    readonly={readonly}
                    direction={direction}
                />
            )}
        />
    );
};
