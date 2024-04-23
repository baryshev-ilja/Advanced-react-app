import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { SortByFiltersArticleList } from '@/features/sortArticleList';
import { ToggleViewArticleList } from '@/features/toggleViewArticleList';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { Tabs } from '@/shared/ui/deprecated/Tabs';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
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

    // const typesTabs = useMemo(() => Object.values(ArticleTypes)
    //     .reduce((acc: TabsItem<ArticleTypes>[], cur) => ([
    //         ...acc,
    //         {
    //             value: cur,
    //             content: t(cur, { ns: 'article' }),
    //         },
    //     ]), []), [t]);

    return (
        <VStack gap="16" max>
            <HStack justify="between" max>
                <SortByFiltersArticleList
                    orderValue={order}
                    sortValue={sort}
                    onChangeOrder={orderFilterHandler}
                    onChangeSort={sortFilterHandler}
                />
                <ToggleViewArticleList view={view} onClickView={onClickViewHandler} />
            </HStack>
            <Card className={cls.inputSearch_wrapper}>
                <Input
                    value={search}
                    onChange={changeSearchHandler}
                    labelElement={t('Поиск')}
                />
            </Card>
            <Tabs
                tabs={typesTabs}
                currentValue={type}
                onTabClick={changeTypeTabsHandler}
            />
        </VStack>
    );
});
