import { Story } from '@storybook/react';

export function LoaderDecorator() {
    return (StoryComponent: Story) => (
        <div style={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
            <StoryComponent />
        </div>
    );
}
