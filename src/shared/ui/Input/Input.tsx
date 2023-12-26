import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    labelElement?: string;
    autofocus?: boolean;
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

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {labelElement && (
                <label
                    htmlFor={id}
                    className={cls.label}
                >
                    {labelElement}
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
            />
        </div>
    );
});
