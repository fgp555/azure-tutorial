import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { api } from "./api";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await api.get("/");
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const response = await api.post("/", { title });
    setTodos([...todos, response.data]);
  };

  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t._id === id);
    const updatedTodo = await api.put(`/${id}`, {
      completed: !todo.completed,
    });
    setTodos(
      todos.map((t) => (t._id === id ? updatedTodo.data : t))
    );
  };

  const deleteTodo = async (id) => {
    await api.delete(`/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
