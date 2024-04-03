import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import AppRouter from './providers/Router/ui/AppRouter';

import { getUserInited, initAuthData } from '@/entities/user';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
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
    );
}

export default App;
