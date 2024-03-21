import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from './providers/Router';

import { getUserInited, userActions } from '@/entities/user1';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/navbar1';
import { Sidebar } from '@/widgets/sidebar1';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if (user) {
            dispatch(userActions.initAuthData(JSON.parse(user)));
        }
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
