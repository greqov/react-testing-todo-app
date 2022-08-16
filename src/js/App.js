import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
        response.json()
      );
      setTodos(result.slice(0, 5));
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {loading ? 'Loading...' : <TodoList todos={todos} />}
    </div>
  );
}
