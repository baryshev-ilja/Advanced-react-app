import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/user';
import { LoginModal } from '@/features/authByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import LoginIcon from '@/shared/assets/newIcons/login-icon.svg';
import AppLogoLight from '@/shared/assets/Лого-светлое.png';
import AppLogoDark from '@/shared/assets/Лого-темное.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './NavbarRedesigned.module.scss';

interface NavbarRedesignedProps {
    className?: string;
}

export const NavbarRedesigned = memo((props: NavbarRedesignedProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const { theme } = useTheme();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const AppLogo = (theme === 'app-light-theme') ? AppLogoLight : AppLogoDark;

    if (authData) {
        return (
            <header className={classNames(cls.navbarRedesigned, {}, [className])}>
                <HStack
                    justify="between"
                    align="center"
                    className={classNames(cls.navbarInner, {}, [])}
                >
                    {/* <Icon Svg={AppLogoLight} width={359} height={45} /> */}
                    <AppImage
                        src={AppLogo}
                        width={359}
                        height={45}
                    />
                    <HStack gap="8">
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
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
            <HStack justify="between" align="center" className={cls.navbarInner}>
                <AppImage
                    src={AppLogo}
                    width={359}
                    height={45}
                />
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
