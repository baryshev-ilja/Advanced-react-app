import { ReactNode } from 'react';

import { Overlay } from '../../redesigned/Overlay/Overlay';
import { Portal } from '../../redesigned/Portal/Portal';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    container?: HTMLElement;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    isUserSuccessAuth?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        container = document.getElementById('app') as HTMLElement,
        isOpen,
        onClose,
        /**
         * lazy - если равен true, то модальное окно будет лениво подгружаться только по мере вызова
         */
        lazy,
        /**
         * isUserSuccessAuth - этот аргумент, если равен true, закрывает модальное окно, как если бы кликнули на экран
         */
        isUserSuccessAuth,
    } = props;

    /**
     * Хук useModal - отдает все необходимые функции-обработчики и значения для работы модального окна
     */
    const {
        closeHandler,
        isClosing,
        isMounted,
        isOpenModal,
    } = useModal({
        isOpen,
        onClose,
        isUserSuccessAuth,
        animationDelay: 600,
        animationDelayMount: 20,
    });

    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpenModal,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal container={container}>
            <div className={classNames(cls.modal, mods, [className, theme, 'app-modal'])}>
                <Overlay className={cls.overlay} onClick={closeHandler} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
