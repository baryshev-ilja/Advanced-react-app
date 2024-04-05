import { ReactNode } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

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

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        container = document.getElementById('root') as HTMLElement,
        isOpen,
        onClose,
        lazy,
        isUserSuccessAuth,
    } = props;

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
