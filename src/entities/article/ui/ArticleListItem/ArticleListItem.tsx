import { memo } from 'react';

import {
    ArticleListItemDeprecated,
} from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemProps } from './ArticleListItemProps/ArticleListItemProps';
import {
    ArticleListItemRedesigned,
} from './ArticleListItemRedesigned/ArticleListItemRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <ArticleListItemRedesigned {...props} />
            )}
            off={(
                <ArticleListItemDeprecated {...props} />
            )}
        />
    );
});
