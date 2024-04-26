import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';
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
    items?: ListBoxItem<T>[];
    currentValue?: string;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    label?: string;
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
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
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
        </HStack>
    );
}
