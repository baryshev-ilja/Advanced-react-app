import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CardUI.module.scss';

type PaddingSize = '0' | '4' | '8' | '16' | '24';
type GapSize = '0' | '4' | '8' | '16' | '24';
type BorderRadiusSize = '0' | '4' | '8' | '16' | '24' | '32';

const mapPaddingToClasses = {
    0: 'p0',
    4: 'p4',
    8: 'p8',
    16: 'p16',
    24: 'p24',
};

const mapGapToClasses = {
    0: 'gap0',
    4: 'gap4',
    8: 'gap8',
    16: 'gap16',
    24: 'gap24',
};

const mapBorderRadiusToClasses = {
    0: 'b0',
    4: 'b4',
    8: 'b8',
    16: 'b16',
    24: 'b24',
    32: 'b32',
};

interface CardUIProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    padding?: PaddingSize;
    gap?: GapSize;
    borderRadius?: BorderRadiusSize;
}

export const CardUI = memo((props: CardUIProps) => {
    const {
        className,
        children,
        padding = '0',
        gap = '0',
        borderRadius = '8',
        ...otherProps
    } = props;

    const paddingCls = mapPaddingToClasses[padding];
    const gapCls = mapGapToClasses[gap];
    const borderRadiusCls = mapBorderRadiusToClasses[borderRadius];

    const additionalCls = [className, cls[paddingCls], cls[gapCls], cls[borderRadiusCls]];

    return (
        <div {...otherProps} className={classNames(cls.cardUi, {}, additionalCls)}>
            {children}
        </div>
    );
});
