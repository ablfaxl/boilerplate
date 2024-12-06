import { render } from '@testing-library/react';
import test, { describe } from 'node:test';
import { Button } from './button';

describe('Button Component', () => {
  test('renders a default button', () => {
    const { getByText } = render(<Button>click here</Button>);
    // @ts-ignore
    expect(getByText('click here')).toBeInTheDocument();
  });
});
