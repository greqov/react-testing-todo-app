import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import mockData from '../__mocks__/mockData';

describe('<TodoItem /> tests', () => {
  test('should render todo item properly', () => {
    render(<TodoItem todo={mockData[0]} />);
    expect(screen.getByText(/eat breakfast/i)).toBeInTheDocument();
    expect(screen.getByTestId('close-btn-1')).toBeInTheDocument();
  });
});
