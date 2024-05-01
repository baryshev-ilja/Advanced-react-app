import { memo, useCallback } from 'react';

import CopyIconNew from '../../../assets/newIcons/documents.svg';
import { Button } from '../Button/Button';
import { Icon } from '../Icon';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                variant="clear"
                buttonPadding="2"
                onClick={onCopy}
            >
                <Icon Svg={CopyIconNew} width={22} height={22} className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
