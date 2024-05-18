import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type svgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends svgProps {
    className?: string;
    /**
     * someClassName - дополнительный класс, который нужен для сложных случаев позиционирования внутренней button
     */
    someClassName?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        someClassName,
        Svg,
        width = 22,
        height = 22,
        clickable,
        ...otherProps
    } = props;

    const svgElement = (
        <Svg
            className={classNames(cls.icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={classNames(cls.button, {}, [someClassName])}
                onClick={props.onClick}
            >
                {svgElement}
            </button>
        );
    }

    return svgElement;
});
