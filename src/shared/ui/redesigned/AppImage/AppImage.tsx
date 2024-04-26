import {
    ImgHTMLAttributes,
    memo,
    ReactElement, useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    /**
     * Это поле используется в тот момент когда нужно исключить показ запасного fallback-а загрузки при перерендере.
     *
     * Если оно будет false, то при перерендере не будет показан fallback, а значит не будет дёрганья интерфейса.
     *
     * Если его не передать, то по дефолту будет значение true, и при перерендере всегда сначала будет мелькать
     * fallback, и потом показываться изображение. Будет происходить дёрганье интерфейса.
     */
    isLoading?: boolean;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        isLoading,
        ...otherProps
    } = props;

    const [loading, setLoading] = useState(Boolean(isLoading) ?? true);
    const [isError, setIsError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setLoading(false);
        };
        img.onerror = () => {
            setLoading(false);
            setIsError(true);
        };
    }, [src]);

    if (loading && fallback) {
        return fallback;
    }

    if (isError && errorFallback) {
        return errorFallback;
    }

    return (
        <img src={src} alt={alt} className={className} {...otherProps} />
    );
});
