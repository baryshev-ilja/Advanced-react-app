import React from 'react';

import ThemeProvider from './ThemeProvider';

import { useUserJsonSettings } from '@/entities/user';

export const withTheme = (Component: React.ComponentType) => {
    return () => {
        const { theme: defaultTheme } = useUserJsonSettings();
        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <Component />
            </ThemeProvider>
        );
    };
};
