import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { AppLink } from '../../../AppLink/AppLink';
import clsPopup from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

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
        <Menu as="div" className={classNames(clsPopup.popup, {}, [className])}>
            <Menu.Button className={clsPopup.btnTrigger}>{trigger}</Menu.Button>

            <Menu.Items className={classNames(cls.menu, {}, [cls[direction]])}>
                {items?.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => {
                        if (item.tagName) {
                            const Tag = item.tagName;

                            return (
                                <Tag
                                    className={classNames(cls.item, {
                                        [clsPopup.hovered]: active,
                                        [clsPopup.disabled]: item.disabled,
                                    }, [clsPopup.itemBg])}
                                >
                                    {item.content}
                                </Tag>
                            );
                        }

                        return (
                            <button
                                type="button"
                                className={classNames(cls.item, {
                                    [clsPopup.hovered]: active,
                                    [clsPopup.disabled]: item.disabled,
                                }, [clsPopup.itemBg])}
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
