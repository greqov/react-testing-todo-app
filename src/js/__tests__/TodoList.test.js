import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import mockData from '../__mocks__/mockData';

describe('todo list test', () => {
  test('should show title of todos', () => {
    render(<TodoList todos={mockData} />);
    mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
  });
});
