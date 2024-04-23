import { ReactNode, useCallback } from 'react';

import { VStack } from '../../redesigned/Stack';
import { Button } from '../Button';

import { typedMemo } from '@/shared/const/typedMemo';
import { classNames } from '@/shared/lib/classNames/classNames';

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
        <VStack gap="4">
            {tabs.map((tab) => (
                <Button
                    className={classNames(cls.tab, { [cls.activeTab]: tab.value === currentValue }, [])}
                    key={tab.value}
                    variant={tab.value === currentValue ? 'auth' : 'clear'}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Button>
            ))}
        </VStack>
    );
});
