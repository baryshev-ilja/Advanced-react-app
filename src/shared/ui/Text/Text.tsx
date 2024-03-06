import { AdditionalCls, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    S = 'sizeS',
    M = 'sizeM',
    L = 'sizeL',
}

type TagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, TagType> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
};

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: ThemeText;
    align?: string;
    size?: TextSize;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        description,
        theme = ThemeText.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = '',
    } = props;

    const additionalCls: AdditionalCls = [
        className,
        cls[theme],
        cls[align],
        cls[size],
    ];

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames('', {}, additionalCls)}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {description && (
                <p
                    className={cls.description}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {description}
                </p>
            )}
        </div>
    );
});
