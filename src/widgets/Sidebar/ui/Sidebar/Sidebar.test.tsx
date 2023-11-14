import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
    test('render sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar collapsed', () => {
        renderWithTranslation(<Sidebar />);
        const btnToggle = screen.getByTestId('button-toggle');
        fireEvent.click(btnToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('sidebarCollapsed');
        fireEvent.click(btnToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('sidebar');
    });
});
