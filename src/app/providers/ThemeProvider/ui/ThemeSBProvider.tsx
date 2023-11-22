import React, {
    FC, ReactNode, useMemo, useState,
} from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeSBProviderProps {
    children: ReactNode;
    initialTheme: Theme;
}

const ThemeSBProvider: FC<ThemeSBProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    const defaultProps = useMemo(() => ({
        theme,
        toggleTheme,
    }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeSBProvider;
