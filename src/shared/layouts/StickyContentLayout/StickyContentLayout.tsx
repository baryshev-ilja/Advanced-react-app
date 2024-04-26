import { memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    content: ReactElement;
    rightbar: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, content, rightbar } = props;

    return (
        <div className={classNames(cls.contentLayout, {}, [className])}>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>{rightbar}</div>
        </div>
    );
});
