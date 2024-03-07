import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export function RouterDecorator(StoryComponent: Story) {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    );
}
