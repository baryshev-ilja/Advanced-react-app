import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    container?: HTMLElement;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        container,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const timerCloseRef = useRef<ReturnType<typeof setTimeout>>();
    const timerOpenRef = useRef<ReturnType<typeof setTimeout>>();

    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerOpenRef.current = setTimeout(() => {
                setIsOpenModal(true);
            }, 20);
        }
        return () => {
            setIsMounted(false);
            setIsOpenModal(false);
        };
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerCloseRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 600);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerCloseRef.current);
            clearTimeout(timerOpenRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

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
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
