import { fireEvent, render, screen, waitFor, getNodeText } from './test-utils';
// import userEvent from '@testing-library/user-event';
import App from './App';

test('renders button with "Pause" label', () => {
  render(<App />);
  const btnElement = screen.getByText('Pause');
  expect(btnElement).toBeInTheDocument();
});

test('should switch button label', async () => {
  const { getByCustomAttr } = render(<App />);
  // const btnElement = screen.getByText('Pause');
  // userEvent.click(btnElement);
  const btnElement = getByCustomAttr('button');
  fireEvent.click(btnElement);
  await waitFor(
    () => {
      expect(getNodeText(btnElement)).toEqual('Start');
    },
    { timeout: 2000 }
  );
});
