import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';

import { useUserJsonSettings } from '@/entities/user';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme,
    children: ReactNode,
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;
    const { theme: defaultTheme } = useUserJsonSettings();
    const [isThemeInited, setIsThemeInited] = useState(false);

    const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme || Theme.LIGHT);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited, theme]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
