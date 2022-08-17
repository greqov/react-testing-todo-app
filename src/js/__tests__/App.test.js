import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockData from '../__mocks__/mockData';

beforeEach(() => {
  // eslint-disable-next-line no-undef
  fetchMock.enableMocks();
  // eslint-disable-next-line no-undef
  fetchMock.once([JSON.stringify(mockData)]);
});

describe('<App /> tests', () => {
  it('renders <App />', async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });

  it('should add a todo item', async () => {
    // eslint-disable-next-line no-undef
    fetchMock.once(
      JSON.stringify({
        userId: 3,
        id: Math.floor(Math.random() * 100) + 1,
        title: 'Do math homework',
        completed: false,
      })
    );

    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    userEvent.type(screen.getByRole('textbox'), 'Do math homework');
    userEvent.click(screen.getByText(/Add new todo/i));
    // for unknown reason it doesn't work the same way as prev example
    // with 'loading' case
    const savingLabel = await screen.findByText(/saving/i);
    await waitForElementToBeRemoved(savingLabel);
    expect(screen.getByText(/Do math homework/i)).toBeInTheDocument();
  });

  test('remove todo item from list', async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    userEvent.click(screen.getByTestId('close-btn-3'));
    // NOTE: fails without next await line
    // I don't know why
    await waitForElementToBeRemoved(() => screen.getByText(/Take out the trash/i));
    screen.debug();
    expect(screen.queryByText(/Take out the trash/i)).not.toBeInTheDocument();
  });
});
