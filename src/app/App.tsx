import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

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
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
