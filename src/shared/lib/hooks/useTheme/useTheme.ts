import { useContext } from 'react';

import { ThemeContext } from '../../../context/ThemeContext';

import { Theme } from '@/shared/const/theme';

interface IUseThemeResult {
    theme: Theme;
    toggleTheme: (saveAction: (theme: Theme) => void) => void;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction: (theme: Theme) => void) => {
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
        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
