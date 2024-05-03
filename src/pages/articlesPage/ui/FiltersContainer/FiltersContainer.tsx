import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useVisibleScroll } from '@/shared/lib/hooks/useVisibleScroll/useVisibleScroll';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticlesFilters } from '@/widgets/articlesFilters';
import { ScrollToolbar } from '@/widgets/scrollToolbar';

import cls from './FiltersContainer.module.scss';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const { pathname } = useLocation();
    const isVisible = useVisibleScroll();

    const {
        view,
        sort,
        order,
        search,
        type,
        typesTabs,
        onClickViewHandler,
        sortFilterHandler,
        orderFilterHandler,
        changeTypeTabsHandler,
        changeSearchHandler,
    } = useArticleFilters(pathname);

    return (
        <VStack gap="16" className={classNames(cls.filtersContainer, {}, [className])}>
            <ArticlesFilters
                className={className}
                view={view}
                sort={sort}
                order={order}
                search={search}
                type={type}
                typesTabs={typesTabs}
                onClickView={onClickViewHandler}
                onChangeSort={sortFilterHandler}
                onChangeOrder={orderFilterHandler}
                onTabClick={changeTypeTabsHandler}
                onChangeSearch={changeSearchHandler}
            />
            {isVisible && <ScrollToolbar />}
        </VStack>
    );
});
