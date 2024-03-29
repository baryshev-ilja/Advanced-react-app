import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../model/types/country';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { ListBox } from '@/shared/ui/Popups';

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
    const { t } = useTranslation();

    const selectChangeHandler = useCallback((value: string) => {
        if (onChange) {
            onChange(value as Country);
        }
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            currentValue={value}
            defaultValue={t('Выберите страну')}
            label={t('Выберите страну')}
            onChange={selectChangeHandler}
            items={options}
            readonly={readonly}
            direction={direction}
        />
    );
};
