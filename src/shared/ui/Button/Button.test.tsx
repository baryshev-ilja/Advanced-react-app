import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button test', () => {
    test('render button', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>test</Button>);
        expect(screen.getByTestId('button-test')).toBeInTheDocument();
    });

    test('button theme clear', () => {
        render(<Button theme={ButtonTheme.CLEAR} />);
        expect(screen.getByTestId('button-test')).toHaveClass('button clear');
    });
});
