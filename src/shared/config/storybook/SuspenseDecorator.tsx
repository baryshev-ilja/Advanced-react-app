import { Story } from '@storybook/react';
import { Suspense } from 'react';

/**
 * SuspenseDecorator - Декоратор, создающий вокруг <StoryComponent /> Suspense-окружение,
 * чтобы <StoryComponent /> которые подгружаются асинхронно могли отобразиться и Storybook не упал
 */
export function SuspenseDecorator(StoryComponent: Story) {
    return (
        <Suspense>
            <StoryComponent />
        </Suspense>
    );
}
