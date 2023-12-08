import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
    test('render sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar collapsed', () => {
        componentRender(<Sidebar />);
        const btnToggle = screen.getByTestId('button-toggle');
        fireEvent.click(btnToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('sidebarCollapsed');
        fireEvent.click(btnToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('sidebar');
    });
});
