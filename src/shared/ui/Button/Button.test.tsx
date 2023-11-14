import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button test', () => {
    test('render button', () => {
        render(<Button>test</Button>);
        expect(screen.getByTestId('button-test')).toBeInTheDocument();
    });

    test('button theme clear', () => {
        render(<Button theme={ThemeButton.CLEAR} />);
        expect(screen.getByTestId('button-test')).toHaveClass('button clear');
    });
});
