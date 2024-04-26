import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticlesFilters } from '@/widgets/articlesFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const { pathname } = useLocation();

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
    );
});
