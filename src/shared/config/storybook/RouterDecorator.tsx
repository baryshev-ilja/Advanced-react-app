import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

/**
 * RouterDecorator - Декоратор, создающий вокруг <StoryComponent /> BrowserRouter,
 * в котором присутствуют необходимые маршруты для отображения этого <StoryComponent />
 */
export function RouterDecorator(StoryComponent: Story) {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    );
}
