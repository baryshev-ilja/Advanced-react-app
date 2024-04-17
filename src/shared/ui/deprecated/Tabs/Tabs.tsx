import { ReactNode, useCallback } from 'react';

import { HStack } from '../../redesigned/Stack';
import { Card, CardTheme } from '../Card/Card';

import { typedMemo } from '@/shared/const/typedMemo';

import cls from './Tabs.module.scss';

export interface TabsItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    tabs: TabsItem<T>[];
    currentValue: T;
    onTabClick: (tab: TabsItem<T>) => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const {
        tabs,
        currentValue,
        onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabsItem<T>) => () => {
        onTabClick?.(tab);
    }, [onTabClick]);

    return (
        <HStack gap="16">
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={tab.value === currentValue ? CardTheme.CURRENT : CardTheme.NORMAL}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </HStack>
    );
});
