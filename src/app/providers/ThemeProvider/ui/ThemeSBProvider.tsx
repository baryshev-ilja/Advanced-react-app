import React, {
    FC, ReactNode, useCallback, useMemo, useState,
} from 'react';

import { ThemeContext } from '../../../../shared/context/ThemeContext';

import { Theme } from '@/shared/const/theme';

interface ThemeSBProviderProps {
    children: ReactNode;
    initialTheme: Theme;
}

const ThemeSBProvider: FC<ThemeSBProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    const toggleTheme = useCallback(() => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }, [theme]);

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
