import { Story } from '@storybook/react';
import { Theme, ThemeProvider, ThemeStory } from '@/app/providers/ThemeProvider';

export function ThemeDecorator(theme: ThemeStory) {
    let themeForProvider: Theme;
    let colorTextForStory: string;

    switch (theme) {
    case ThemeStory.GRAY:
        themeForProvider = Theme.GRAY;
        colorTextForStory = '#687a90';
        break;
    case ThemeStory.DARK:
        themeForProvider = Theme.DARK;
        colorTextForStory = '#78f078';
        break;
    case ThemeStory.LIGHT:
        themeForProvider = Theme.LIGHT;
        colorTextForStory = '#030b50';
        break;
    default:
        break;
    }

    return (StoryComponent: Story) => (
        <ThemeProvider initialTheme={themeForProvider}>
            <div
                className={`${themeForProvider}`}
                style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontFamily: 'Consolas',
                    background: `${theme}`,
                    padding: '25px 40px',
                    minHeight: '100vh',
                    color: `${colorTextForStory}`,
                }}
            >
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
}
