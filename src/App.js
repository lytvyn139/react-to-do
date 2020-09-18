import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //creating state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);


  useEffect(() => {
    getLocalTodos();
  }, []);
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]); //[] it's gonna run only once when component got rendered
  //running every time todos value is changing

  const filterHandler = () => {
    switch(status) {
      case 'completed': 
        setfilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': 
        setfilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setfilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
}

  return (
    <div className="App">
      <header>
        <h1>To do list: </h1>
        {/* <h1> {inputText} </h1> */}
      </header>
      <Form //passing
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
        
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
   
    </div>
  );
}

export default App;
