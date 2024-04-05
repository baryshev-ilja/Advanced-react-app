import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, ThemeText } from '@/shared/ui/deprecated/Text';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const reducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    const labelUsername = t('Введите логин');
    const labelPassword = t('Введите пароль');

    return (
        <DynamicReducerLoad reducers={reducers}>
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
        </DynamicReducerLoad>
    );
});

export default LoginForm;
