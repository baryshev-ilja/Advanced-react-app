import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => (sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
        />
    ))), [collapsed, sidebarItemsList]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.sidebarCollapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="button-toggle"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size="sizeL"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack gap="4" tagName="nav">
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
});
