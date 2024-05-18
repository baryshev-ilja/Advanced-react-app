// eslint-disable-next-line baryshewww/layers-import
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

/**
 * StyleDecorator - Декоратор, создающий вокруг <StoryComponent /> окружение,
 * в котором подгружаются глобальные стили для приложения
 */
export function StyleDecorator(StoryComponent: () => Story) {
    return StoryComponent();
}
