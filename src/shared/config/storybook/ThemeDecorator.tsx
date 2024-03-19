import { Story } from '@storybook/react';

// eslint-disable-next-line baryshewww/layers-import
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme, ThemeStory } from '@/shared/const/theme';

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
