import React from 'react';

export default function TodoItem({ todo, removeHandler }) {
  return (
    <div>
      <span>{todo.title}</span>
      <button
        className="p-1 border"
        data-testid={`close-btn-${todo.id}`}
        onClick={() => {
          removeHandler(todo.id);
        }}
      >
        x
      </button>
    </div>
  );
}
