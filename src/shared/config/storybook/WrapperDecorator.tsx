import { Story } from '@storybook/react';

/**
 * WrapperDecorator - Декоратор, создающий вокруг <StoryComponent />
 * дополнительную обертку, добавляющую растягивание на всю высоту
 * и добавляющую вертикальный скрол
 */
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
