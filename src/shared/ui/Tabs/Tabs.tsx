import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabsItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabsItem<T>[];
    currentValue: T;
    onTabClick: (tab: TabsItem<T>) => void;
}

const typedMemo: <T>(Component: T) => T = memo;

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        currentValue,
        onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabsItem<T>) => () => {
        onTabClick?.(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
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
        </div>
    );
});
