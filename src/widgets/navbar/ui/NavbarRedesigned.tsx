import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, userActions } from '@/entities/user';
import { LoginModal } from '@/features/authByUsername';
import clsContainer from '@/shared/layouts/container.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
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
                <div className={clsContainer.container}>
                    <HStack justify="end" className={cls.navbarInner}>
                        <Button
                            theme={ButtonTheme.CLEAR_INVERTED}
                            onClick={onLogout}
                        >
                            {t('Выйти')}
                        </Button>
                        <LoginModal
                            isOpen={isAuthModal}
                            onClose={onCloseModal}
                            isSuccessAuth={Boolean(authData)}
                        />
                    </HStack>
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbarRedesigned, {}, [className])}>
            <div className={clsContainer.container}>
                <HStack justify="end" className={cls.navbarInner}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onOpenModal}
                    >
                        {t('Войти')}
                    </Button>
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                        isSuccessAuth={authData}
                    />
                </HStack>
            </div>
        </header>
    );
});
