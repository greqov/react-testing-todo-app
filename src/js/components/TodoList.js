import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, removeHandler }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeHandler={removeHandler} />
      ))}
    </div>
  );
}
