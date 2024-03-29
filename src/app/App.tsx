import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './providers/Router/ui/AppRouter';

import { User, userActions } from '@/entities/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    // const inited = useSelector(getUserInited);

    useEffect(() => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if (user) {
            const json = JSON.parse(user) as User;
            dispatch(userActions.initAuthData(json));
        }
    }, [dispatch]);

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
