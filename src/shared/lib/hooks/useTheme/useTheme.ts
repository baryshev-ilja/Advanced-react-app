import { useContext } from 'react';

import { ThemeContext } from '../../../context/ThemeContext';

import { Theme } from '@/shared/const/theme';

interface UseThemeResult {
    /** theme - Текущая тема приложения */
    theme: Theme;
    /** toggleTheme - Функция, меняющая текущую тему на новую, которую принимает в себя аргументом */
    toggleTheme: (saveAction: (theme: Theme) => void) => void;
}

/**
 * useTheme - Кастомный хук, инкапсулирующий в себе работу с ThemeContext.
 * Возвращает текущую тему и функцию, которая её меняет
 */
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
