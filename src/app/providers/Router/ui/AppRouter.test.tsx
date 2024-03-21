import { screen } from '@testing-library/react';

import AppRouter from './AppRouter';

import { UserRole } from '@/entities/user1';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('AppRouter test', () => {
    test('Должна отрендериться нужная страница (about)', async () => {
        componentRender(<AppRouter />, { route: AppRoutePaths.about() });

        const page = await screen.findByTestId('Page-about');
        expect(page).toBeInTheDocument();
    });

    test('Несуществующий маршрут, должен произойти редирект на (main)', async () => {
        componentRender(<AppRouter />, { route: '/gfhdfghdfg' });

        const page = await screen.findByTestId('no-found-page');
        expect(page).toBeInTheDocument();
    });

    test('Не авторизован и хочет зайти на защищенный маршрут, должен произойти редирект на (main)', async () => {
        componentRender(<AppRouter />, { route: AppRoutePaths.profile('1') });

        const page = await screen.findByTestId('Main-page');
        expect(page).toBeInTheDocument();
    });

    test('Нет нужной роли и хочет зайти на защищенный маршрут (admin)', async () => {
        componentRender(<AppRouter />, {
            route: AppRoutePaths.adminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { id: '1', username: 'admin', roles: [UserRole.USER] },
                },
            },
        });

        const page = await screen.findByTestId('Forbidden-page');
        expect(page).toBeInTheDocument();
    });

    test('Есть нужная роль и хочет зайти на защищенный маршрут (admin)', async () => {
        componentRender(<AppRouter />, {
            route: AppRoutePaths.adminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { id: '1', username: 'admin', roles: [UserRole.ADMIN] },
                },
            },
        });

        const page = await screen.findByTestId('Admin-page');
        expect(page).toBeInTheDocument();
    });
});
