import { CSSProperties, memo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    /** borderRadius - Закругляет углы */
    borderRadius?: string;
    /** delay - Делает анимацию медленее */
    delay?: boolean;
    /** delaySlow - Перезатирает delay, и делает анимацию еще медленее */
    delaySlow?: boolean;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        borderRadius,
        delay,
        delaySlow,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    const mods: Mods = {
        [cls.delay]: delay,
        [cls.delaySlow]: delaySlow,
    };

    return (
        <div
            style={styles}
            className={classNames(cls.skeleton, mods, [className])}
        />
    );
});
