import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import AppRouter from './providers/Router/ui/AppRouter';

import { getUserInited, initAuthData } from '@/entities/user';
import { MainLayout, MainLayoutSkeletons } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar, NavbarRedesigned } from '@/widgets/navbar';
import { Sidebar, SidebarRedesigned } from '@/widgets/sidebar';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <MainLayoutSkeletons />
        );
    }

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <div className={classNames('app-redesigned', {}, [theme])}>
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
                <div className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {/* {inited && <AppRouter />} */}
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            )}
        />
    );
}

export default App;
