import { render, screen } from '@testing-library/react';
import Mainscreen from '../pages/Mainscreen';

test('renders Car Supply Shop', () => {
  render(<Mainscreen />);
  expect(screen.getByText(/Car Supply Shop/i)).toBeInTheDocument();
});
