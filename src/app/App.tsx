import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import AppRouter from './providers/Router/ui/AppRouter';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

import { getUserInited, initAuthData } from '@/entities/user';
import { MainLayout, MainLayoutSkeletons } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { PageLoader } from '@/shared/ui/deprecated/PageLoader';
import { Navbar, NavbarRedesigned } from '@/widgets/navbar';
import { Sidebar, SidebarRedesigned } from '@/widgets/sidebar';

const App = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <div id="app" className={classNames('app-redesigned', {}, [theme])}>
                        <MainLayoutSkeletons />
                    </div>
                )}
                off={<PageLoader />}
            />
        );
    }

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <div id="app" className={classNames('app-redesigned', {}, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            content={<AppRouter />}
                            header={<NavbarRedesigned />}
                            sidebar={<SidebarRedesigned />}
                        />
                    </Suspense>
                </div>
            )}
            off={(
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            )}
        />
    );
});

export default withTheme(App);
