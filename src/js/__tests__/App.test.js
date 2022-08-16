import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import App from '../App';
import mockData from '../__mocks__/mockData';

beforeEach(() => {
  fetchMock.enableMocks();
  fetchMock.once(JSON.stringify(mockData));
});

describe('<App /> tests', () => {
  it('renders <App />', async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });
});
