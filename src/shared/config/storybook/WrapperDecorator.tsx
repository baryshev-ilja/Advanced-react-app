import { Story } from '@storybook/react';

export function WrapperDecorator() {
    return (StoryComponent: Story) => (
        <div style={{
            minHeight: '100vh',
            overflowY: 'auto',
        }}
        >
            <StoryComponent />
        </div>
    );
}
