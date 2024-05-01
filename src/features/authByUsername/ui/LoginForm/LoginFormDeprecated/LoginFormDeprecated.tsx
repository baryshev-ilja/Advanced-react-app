import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, ThemeText } from '@/shared/ui/deprecated/Text';

import cls from './LoginFormDeprecated.module.scss';

interface LoginFormDeprecatedProps {
    className?: string;
    error?: string;
    isLoading: boolean;
    username: string;
    password: string;
    onChangeUsername: (value: string) => void;
    onChangePassword: (value: string) => void;
    onLoginClick: () => void;
}

export const LoginFormDeprecated = (props: LoginFormDeprecatedProps) => {
    const {
        className,
        error,
        isLoading,
        username,
        password,
        onChangeUsername,
        onChangePassword,
        onLoginClick,
    } = props;
    const { t } = useTranslation();

    const labelUsername = t('Введите логин');
    const labelPassword = t('Введите пароль');

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text description={t('Вы неправильно ввели логин или пароль')} theme={ThemeText.ERROR} />}
            <Input
                type="text"
                className={cls.input}
                value={username}
                onChange={onChangeUsername}
                labelElement={labelUsername}
                autofocus
                id="username"
            />
            <Input
                type="text"
                className={cls.input}
                value={password}
                onChange={onChangePassword}
                labelElement={labelPassword}
                id="password"
            />
            <Button
                className={cls.btn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
