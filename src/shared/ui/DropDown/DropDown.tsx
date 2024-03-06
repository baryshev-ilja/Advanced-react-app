import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './DropDown.module.scss';

export interface MenuDropdownItem {
    disabled?: boolean;
    tagName?: keyof HTMLElementTagNameMap;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items?: MenuDropdownItem[];
    trigger?: ReactNode;
    direction?: DropdownDirection;
}

export function DropDown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        direction = 'bottomLeft',
    } = props;

    return (
        <Menu as="div" className={classNames(cls.dropDown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>

            <Menu.Items className={classNames(cls.menu, {}, [cls[direction]])}>
                {items?.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => {
                        if (item.tagName) {
                            const Tag = item.tagName;

                            return (
                                <Tag
                                    className={classNames(cls.item, {
                                        [cls.hovered]: active,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                </Tag>
                            );
                        }

                        return (
                            <button
                                type="button"
                                className={classNames(cls.item, {
                                    [cls.hovered]: active,
                                    [cls.disabled]: item.disabled,
                                })}
                                onClick={item.onClick}
                            >
                                {item.content}
                            </button>
                        );
                    };

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={index}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>

        </Menu>
    );
}
