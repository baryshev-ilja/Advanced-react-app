import { Story } from '@storybook/react';

// eslint-disable-next-line baryshewww/layers-import
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme, ThemeStory } from '@/shared/const/theme';

/**
 * ThemeOldDecorator - Декоратор, создающий вокруг <StoryComponent /> окружение,
 * в котором присутствуют ThemeProvider и дополнительная обертка, добавляющая
 * дополнительные отступы во viewport Storybook-a
 *
 * @param theme - Тема, для отображения <StoryComponent /> и фона
 */
export function ThemeOldDecorator(theme: ThemeStory) {
    let themeForProvider: Theme;
    let colorTextForStory: string;

    switch (theme) {
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
                    minHeight: '100vh',
                    padding: '25px 40px',
                    // color: `${colorTextForStory}`,
                }}
            >
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
}
