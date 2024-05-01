import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import { HStack } from '../../../../redesigned/Stack';
import { Button, ButtonTheme } from '../../../Button/Button';
import clsPopup from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    currentValue?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export function ListBox(props: ListBoxProps) {
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
                        theme={ButtonTheme.OUTLINE}
                        disabled={readonly}
                    >
                        {selectedItem?.content ?? defaultValue}
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
                                }, [])}
                                >
                                    {selected && '!!'}
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
