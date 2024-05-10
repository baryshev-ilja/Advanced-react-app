import { ProfilePageSkeleton } from '@/entities/profile';
import { ArticlesPageSkeleton } from '@/pages/articlesPage';
import { MainPageSkeleton } from '@/pages/mainPage';
import { ToggleFeatures } from '@/shared/lib/features';
import { PageLoader } from '@/shared/ui/deprecated/PageLoader';

export const ProfilePageSuspense = () => (
    <ToggleFeatures
        name="isAppRedesigned"
        on={<ProfilePageSkeleton />}
        off={<PageLoader />}
    />
);

export const ArticlesPageSuspense = () => (
    <ToggleFeatures
        name="isAppRedesigned"
        on={<ArticlesPageSkeleton />}
        off={<PageLoader />}
    />
);

export const MainPageSuspense = () => (
    <ToggleFeatures
        name="isAppRedesigned"
        on={<MainPageSkeleton />}
        off={<PageLoader />}
    />
);
