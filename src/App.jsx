// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add your custom CSS if needed
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import FilterTodos from './Components/FilterTodos';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [nextId, setNextId] = useState(1);


  // Function to add a new todo
  const addTodo = (todo) => {
    const newTodo = { ...todo, id: nextId };//Date.now().toString()
    setTodos([...todos, newTodo]);
    setFilteredTodos([...filteredTodos, newTodo]); // Update filtered todos
    setNextId(nextId + 1);
  };

  // Function to update the status of a todo
  const updateTodoStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: todo.status === 'completed' ? 'not completed' : 'completed' } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos); // Update filtered todos
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos); // Update filtered todos
  };

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    let filtered;
    switch (filter) {
      case 'completed':
        filtered = todos.filter((todo) => todo.status === 'completed');
        break;
      case 'not completed':
        filtered = todos.filter((todo) => todo.status !== 'completed');
        break;
      default:
        filtered = todos;
        break;
    }
    setFilteredTodos(filtered);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <FilterTodos handleFilterChange={handleFilterChange} />
        </div>
        <div className="col-md-12">
          <TodoList
            todos={filteredTodos} // Pass filtered todos to TodoList
            updateTodoStatus={updateTodoStatus} // Pass updateTodoStatus function
            deleteTodo={deleteTodo} // Pass deleteTodo function
          />
        </div>
      </div>
    </div>
  );
}

export default App;
