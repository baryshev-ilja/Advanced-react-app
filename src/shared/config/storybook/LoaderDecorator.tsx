import { Story } from '@storybook/react';

/**
 * LoaderDecorator - Декоратор, создающий вокруг <StoryComponent /> флекс-контейнер,
 * который позиционирует <StoryComponent /> по центру
 */
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
