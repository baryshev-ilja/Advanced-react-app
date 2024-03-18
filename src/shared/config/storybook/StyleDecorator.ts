// eslint-disable-next-line baryshewww/layers-import
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export function StyleDecorator(StoryComponent: () => Story) {
    return StoryComponent();
}
