import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //creating state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
      />
   
    </div>
  );
}

export default App;
