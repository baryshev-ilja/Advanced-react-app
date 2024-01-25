import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    labelElement?: string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type,
        id,
        labelElement,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    // const ref = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    //     if (autofocus) {
    //         ref.current?.focus();
    //     }
    // }, [autofocus]);

    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {labelElement && (
                <label
                    htmlFor={id}
                    className={cls.label}
                >
                    {`${labelElement}>`}
                </label>
            )}
            <input
                // ref={ref}
                className={cls.inputElement}
                id={id}
                type={type}
                value={value}
                onChange={onChangeHandler}
                /* eslint-disable-next-line jsx-a11y/no-autofocus */
                autoFocus={autofocus}
                readOnly={readonly}
            />
        </div>
    );
});
