import { memo, useCallback } from 'react';

import { Button, ButtonTheme } from '../../Button';

// eslint-disable-next-line baryshewww/layers-import
import { saveUserJsonSettings } from '@/entities/user';
import Icon from '@/shared/assets/icons/theme-dark.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import './ThemeSwitcher.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const toggleThemeHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveUserJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleThemeHandler}
            className={classNames('', {}, [className])}
        >
            <Icon width={40} height={40} />
        </Button>
    );
});
