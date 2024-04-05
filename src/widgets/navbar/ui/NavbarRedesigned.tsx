import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, userActions } from '@/entities/user';
import { LoginModal } from '@/features/authByUsername';
import LoginIcon from '@/shared/assets/newIcons/login-icon.svg';
import LogoutIcon from '@/shared/assets/newIcons/logout-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
// eslint-disable-next-line baryshewww/layers-import
import { scrollSaveActions } from '@/widgets/page';

import cls from './NavbarRedesigned.module.scss';

interface NavbarRedesignedProps {
    className?: string;
}

export const NavbarRedesigned = memo((props: NavbarRedesignedProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        dispatch(scrollSaveActions.resetScrollPosition());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbarRedesigned, {}, [className])}>
                <HStack
                    justify="end"
                    align="center"
                    className={classNames(cls.navbarInner, {}, [])}
                >
                    <Button
                        variant="auth"
                        onClick={onLogout}
                    >
                        <Icon
                            Svg={LogoutIcon}
                            className={cls.iconAuth}
                            width={22}
                            height={22}
                        />
                        {t('Выйти')}
                    </Button>
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                        isSuccessAuth={Boolean(authData)}
                    />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbarRedesigned, {}, [className])}>
            <HStack justify="end" align="center" className={cls.navbarInner}>
                <Button
                    variant="auth"
                    onClick={onOpenModal}
                >
                    <Icon
                        Svg={LoginIcon}
                        className={cls.iconAuth}
                        width={22}
                        height={22}
                    />
                    {t('Войти')}
                </Button>
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                    isSuccessAuth={authData}
                />
            </HStack>
        </header>
    );
});
