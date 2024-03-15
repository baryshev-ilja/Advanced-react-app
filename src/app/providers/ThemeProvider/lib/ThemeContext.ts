import { createContext } from 'react';

export enum Theme {
    LIGHT = 'app-light-theme',
    DARK = 'app-dark-theme',
    GRAY = 'app-gray-theme',
}

export enum ThemeStory {
    LIGHT = '#e0e0e0',
    DARK = '#161637',
    GRAY = '#f4f7fb',
}

export interface IThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
