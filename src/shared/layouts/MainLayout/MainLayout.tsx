import { memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    content: ReactElement;
    header: ReactElement;
    sidebar: ReactElement;
    rightbar: ReactElement;
    toolbar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {
        className,
        content,
        header,
        toolbar,
        rightbar,
        sidebar,
    } = props;
    return (
        <div className={classNames(cls.mainLayout, {}, [className])}>
            <div className={cls.header}>{header}</div>
            <div className={cls.contentWrapper}>
                <div className={cls.content}>{content}</div>
                <div className={cls.sidebar}>{sidebar}</div>
                <div className={cls.rightbar}>{rightbar}</div>
            </div>
            <div className={cls.toolbar}>{toolbar}</div>
        </div>
    );
});
