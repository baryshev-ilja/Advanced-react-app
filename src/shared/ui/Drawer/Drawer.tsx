import React, {
    memo,
    ReactNode,
    useCallback,
    useEffect,
} from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { AnimationProvider, useAnimationLibs } from '@/shared/lib/HOC/AnimationProvider/AnimationProvider';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    container?: HTMLElement;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        container = document.getElementById('root') as HTMLElement,
        lazy,
    } = props;

    const { theme } = useTheme();
    const { Spring, Gesture } = useAnimationLibs();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));
    const overlayStyle = {
        display,
        opacity: y.to([0, height], [1, 0], 'clamp'),
    };

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal container={container}>
            <div className={classNames(cls.drawer, mods, [className, theme, 'app-drawer'])}>
                <Overlay
                    as={Spring.a.div}
                    onClick={() => onClose?.()}
                    className={cls.overlay}
                    style={overlayStyle}
                />
                <Spring.a.div
                    className={cls.sheet}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { children } = props;
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) return null;

    return (
        <DrawerContent {...props}>
            {children}
        </DrawerContent>
    );
};

export const Drawer = (props: DrawerProps) => {
    const { children } = props;
    return (
        <AnimationProvider>
            <DrawerAsync {...props}>
                {children}
            </DrawerAsync>
        </AnimationProvider>
    );
};
