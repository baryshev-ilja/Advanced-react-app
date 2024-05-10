import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CardUI } from '@/shared/ui/redesigned/CardUI';

import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = ({ className }: ScrollToolbarProps) => {
    return (
        <CardUI padding="16" borderRadius="16" className={classNames(cls.scrollToolbar, {}, [className])}>
            <ScrollToTopButton />
        </CardUI>
    );
};
