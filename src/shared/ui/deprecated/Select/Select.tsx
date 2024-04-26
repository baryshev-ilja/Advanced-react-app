import { ChangeEvent, useCallback, useMemo } from 'react';

import { typedMemo } from '@/shared/const/typedMemo';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface OptionsList<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: OptionsList<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const optionsList = useMemo(() => (
        options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    ), [options]);

    const selectChangeHandler = useCallback((evt: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(evt.target.value as T);
        }
    }, [onChange]);

    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            {label
                && (
                    <span className={cls.label}>
                        {`${label}>`}
                    </span>
                )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={selectChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
