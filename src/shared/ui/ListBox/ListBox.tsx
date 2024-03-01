import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

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

    return (
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.listBox, {}, [className])}
                value={currentValue}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button
                    className={cls.buttonTrigger}
                    disabled={readonly}
                >
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        disabled={readonly}
                    >
                        {currentValue ?? defaultValue}
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
                                    [cls.hovered]: active,
                                    [cls.disabled]: item.disabled,
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
