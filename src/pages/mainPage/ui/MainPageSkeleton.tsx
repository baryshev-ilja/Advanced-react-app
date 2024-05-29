import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
// import { CardUI } from '@/shared/ui/redesigned/CardUI';
// import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
//
// import cls from './MainPage.module.scss';

export const MainPageSkeleton = () => {
    return (
        <StickyContentLayout
            content={<div />}
            rightbar={<div />}
        />
    );
};
