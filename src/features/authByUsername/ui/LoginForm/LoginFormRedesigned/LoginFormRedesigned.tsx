import { useTranslation } from 'react-i18next';

import ValidationErrIcon from '@/shared/assets/newIcons/err-validate-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './LoginFormRedesigned.module.scss';

interface LoginFormRedesignedProps {
    className?: string;
    error?: string;
    isLoading: boolean;
    username: string;
    password: string;
    onChangeUsername: (value: string) => void;
    onChangePassword: (value: string) => void;
    onLoginClick: () => void;
}

export const LoginFormRedesigned = (props: LoginFormRedesignedProps) => {
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
        <CardUI
            className={classNames(cls.loginFormRedesigned, {}, [className])}
            padding="16"
            gap="16"
            borderRadius="16"
        >
            <HStack justify="between" className={cls.headerFormLogin}>
                <Text title={t('Форма авторизации')} fontWeight="semiBold" />
                {error && (
                    <Button
                        className={cls.notificationValidate}
                        variant="errorValidation"
                    >
                        <Icon Svg={ValidationErrIcon} width={22} height={22} />
                        {t('Ошибка')}
                    </Button>
                )}
            </HStack>

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
                type="password"
                className={cls.input}
                value={password}
                onChange={onChangePassword}
                labelElement={labelPassword}
                id="password"
            />
            <Button
                className={cls.btnLogin}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </CardUI>
    );
};
