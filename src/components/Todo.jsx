import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        //if it matches todo.id it's gonna get rid of it
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
            return {
                ...item, completed: !item.completed,
               }
            };
          return item;
        })
        );
    };


    return (
        <div className="todo">
            {/* based on state true/false we change the view */}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;

