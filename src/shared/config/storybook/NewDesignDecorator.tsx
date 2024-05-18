import { Story } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

/**
 * NewDesignDecorator - Декоратор, создающий вокруг <StoryComponent /> окружение,
 * в котором присутствуют необходимые фичи для отображения этого <StoryComponent />
 * в новом обновленном дизайне. Также создает обертку с классом 'app-redesigned',
 * чтобы подхватывались необходимые цвета шрифтов
 */
export const NewDesignDecorator = (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
        <div className="app-redesigned">
            <StoryComponent />
        </div>
    );
};
