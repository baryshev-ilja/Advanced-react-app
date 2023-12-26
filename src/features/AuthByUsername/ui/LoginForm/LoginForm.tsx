import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onChangeLogin = (val: string) => {
        setLogin(val);
    };

    const onChangePass = (val: string) => {
        setPassword(val);
    };

    const labelUsername = t('Введите логин >');
    const labelPassword = t('Введите пароль >');

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                value={login}
                onChange={onChangeLogin}
                labelElement={labelUsername}
                autofocus
                id="username"
            />
            <Input
                type="text"
                className={cls.input}
                value={password}
                onChange={onChangePass}
                labelElement={labelPassword}
                id="password"
            />
            <Button
                className={cls.btn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
