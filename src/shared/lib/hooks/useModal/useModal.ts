import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    /** isOpen - Флаг для запуска открытия модального окна */
    isOpen?: boolean;
    /** onClose - Функция-коллбэк, которая вызывается внутри обработчика закрытия окна */
    onClose?: () => void;
    /** animationDelayMount - Время, через которое модальное окно покажется при монтировании (показе) */
    animationDelayMount?: number;
    /** animationDelay - Время, через которое модальное окно исчезнет при размонтировании (скрытии) */
    animationDelay: number;
    /** isUserSuccessAuth - Флаг нужный для обработки закрытия окна при успешной авторизации */
    isUserSuccessAuth?: boolean;
}

/**
 * useModal - Кастомный хук, инкапсулирующий в себе всю логику открытия/закрытия модального окна
 */
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

    /** Обработчик закрытия окна */
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerCloseRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    /** Обработчик закрытия окна с помощью клавиатуры (escape) */
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        /** Если окно открыто, на window устанавливается обработчик закрытия окна с помощью клавиатуры (escape) */
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        /** При размонтировании модального окна - чистка таймеров и удаление слушателей события */
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
