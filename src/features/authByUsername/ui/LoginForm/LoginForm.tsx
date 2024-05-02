import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { LoginFormDeprecated } from './LoginFormDeprecated/LoginFormDeprecated';
import { LoginFormRedesigned } from './LoginFormRedesigned/LoginFormRedesigned';

import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/render/forceUpdate';

export interface LoginFormProps {
    className?: string;
}

const reducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const forceUpdate = useForceUpdate();

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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            forceUpdate();
        }
    }, [dispatch, forceUpdate, password, username]);

    return (
        <DynamicReducerLoad reducers={reducers}>
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <LoginFormRedesigned
                        isLoading={isLoading}
                        error={error}
                        username={username}
                        password={password}
                        onChangeUsername={onChangeUsername}
                        onChangePassword={onChangePassword}
                        onLoginClick={onLoginClick}
                    />
                )}
                off={(
                    <LoginFormDeprecated
                        isLoading={isLoading}
                        error={error}
                        username={username}
                        password={password}
                        onChangeUsername={onChangeUsername}
                        onChangePassword={onChangePassword}
                        onLoginClick={onLoginClick}
                    />
                )}
            />
        </DynamicReducerLoad>
    );
});

export default LoginForm;
