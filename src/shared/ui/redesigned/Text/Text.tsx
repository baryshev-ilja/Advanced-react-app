import { memo } from 'react';

import { AdditionalCls, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export type VariantText = 'primary' | 'accent' | 'error' | 'ui';
export type TextAlign = 'left' | 'center' | 'right';
export type TextSize = 'sizeS' | 'sizeM' | 'sizeL';
export type TextWeight = 'medium' | 'semiBold';
type TagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, TagType> = {
    sizeL: 'h1',
    sizeM: 'h2',
    sizeS: 'h3',
};

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    ui?: string;
    variant?: VariantText;
    align?: string;
    size?: TextSize;
    fontWeight?: TextWeight;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        description,
        ui,
        variant = 'primary',
        align = 'left',
        size = 'sizeM',
        fontWeight = 'medium',
        'data-testid': dataTestId = '',
    } = props;

    const additionalCls: AdditionalCls = [
        className,
        cls[variant],
        cls[align],
        cls[size],
        cls[fontWeight],
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
            {ui && (
                <span
                    className={cls.ui}
                    data-testid={`${dataTestId}.UI`}
                >
                    {ui}
                </span>
            )}
        </div>
    );
});
