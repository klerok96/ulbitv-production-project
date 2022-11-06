import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Exist button', () => {
    render(<Button onClick={() => {}}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Exist theme class', () => {
    render(<Button onClick={() => {}} theme={ButtonTheme.Clear}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
