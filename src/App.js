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
    filterHandler();
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
