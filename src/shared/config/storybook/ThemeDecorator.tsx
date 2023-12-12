import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

export function ThemeDecorator(theme: Theme) {
    return (StoryComponent: Story) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
}
