import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('Exist button', () => {
    render(<Button onClick={() => {}}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Exist theme class', () => {
    render(<Button onClick={() => {}} theme={ThemeButton.Clear}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
