import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';

import { useUserJsonSettings } from '@/entities/user';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme,
    children: ReactNode,
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;
    const { theme: defaultTheme } = useUserJsonSettings();
    const [isThemeInited, setIsThemeInited] = useState(false);

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.GRAY);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited, theme]);

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
