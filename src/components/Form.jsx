import React from 'react';

const Form = ({ inputText, todos, setTodos, setInputText, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault(); //prevent page from refreshing after the click
        setTodos([
            //if we have any todos in the list ... pass it, {new one }
            ...todos, { 
                        text: inputText, 
                        completed: false, 
                        id: Math.random() * 1000 },
        ]);
        setInputText(''); //clear the input =set state to ""
    };
    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    };

    return (
        <form>
            <input
                value={inputText} //to clear the field after entry
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;