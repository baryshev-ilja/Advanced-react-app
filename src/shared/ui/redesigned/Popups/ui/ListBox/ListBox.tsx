import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icon';
import { VStack } from '../../../Stack';
import { Text } from '../../../Text';
import clsPopup from '../../styles/popup.module.scss';

import ArrowIcon from '@/shared/assets/newIcons/select-arrow-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    /** items - Массив элементов, которые будут в выпадающем списке */
    items?: ListBoxItem<T>[];
    /** currentValue - Текущее значение, которое выбрали. Будет отображаться при закрытом селекте */
    currentValue?: string;
    defaultValue?: string;
    /** onChange - Функция, которая переключает селект на выбраный (кликнутый) пункт из списка */
    onChange: (value: T) => void;
    readonly?: boolean;
    /** label - Название над селектом */
    label?: string;
    /** direction - Определит направление выпадания списка */
    direction?: DropdownDirection;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        currentValue,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'topRight',
    } = props;

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === currentValue);
    }, [currentValue, items]);

    return (
        <VStack gap="8" max>
            {label && <Text ui={label} variant="ui" />}
            <HListBox
                as="div"
                className={classNames(clsPopup.popup, {}, [className])}
                value={currentValue}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button
                    as="div"
                >
                    <Button
                        className={className}
                        disabled={readonly}
                        variant="select"
                        fullWidth
                    >
                        {selectedItem?.content ?? defaultValue}
                        <Icon
                            className={cls.arrowIcon}
                            Svg={ArrowIcon}
                            width={12}
                            height={7}
                        />
                    </Button>
                </HListBox.Button>

                <HListBox.Options className={classNames(cls.options, {}, [cls[direction]])}>
                    {items?.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [clsPopup.hovered]: active,
                                    [clsPopup.disabled]: item.disabled,
                                    [clsPopup.current]: selected,
                                }, [])}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </VStack>
    );
}
