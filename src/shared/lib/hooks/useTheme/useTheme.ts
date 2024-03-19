import { useContext } from 'react';

import { ThemeContext } from '../../../context/ThemeContext';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';

interface IUseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.GRAY;
            break;
        case Theme.GRAY:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.GRAY;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
