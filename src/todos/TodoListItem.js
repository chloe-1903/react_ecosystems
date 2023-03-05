import React from "react";
import './TodoListItem.css';

const TodoListItem = ({todo, onRemovedPressed, onCompletePressed}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="completed-button" onClick={() => onCompletePressed(todo.id)}>Mark as completed</button>
            <button className="remove-button" onClick={() => onRemovedPressed(todo.id)}>Remove</button>
        </div>
    </div>
)

export default TodoListItem; 