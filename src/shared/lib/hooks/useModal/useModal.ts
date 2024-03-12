import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    animationDelayMount?: number;
    animationDelay: number;
    isUserSuccessAuth?: boolean;
}

export function useModal(props: UseModalProps) {
    const {
        isOpen,
        onClose,
        animationDelay,
        animationDelayMount = 20,
        isUserSuccessAuth,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const timerCloseRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const timerOpenRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerOpenRef.current = setTimeout(() => {
                setIsOpenModal(true);
            }, animationDelayMount);
        }
        return () => {
            setIsMounted(false);
            setIsOpenModal(false);
        };
    }, [animationDelayMount, isOpen]);

    useEffect(() => {
        if (isUserSuccessAuth) {
            setIsClosing(true);
            timerCloseRef.current = setTimeout(() => {
                onClose?.();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, isUserSuccessAuth, onClose]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerCloseRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

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

    return {
        isOpenModal,
        isClosing,
        isMounted,
        closeHandler,
    };
}
