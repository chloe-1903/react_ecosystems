import React, {useState} from 'react'
import './NewTodoForm.css';
import { connect } from 'react-redux';
import { addTodo } from './thunks';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className='new-todo-form'>
            <input 
                className='new-todo-input' 
                type="text" 
                placeholder='Your new todo'
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}/>
            <button 
                className='new-todo-button'
                onClick={() => {
                    const isDuplicatedText = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicatedText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
            >
                Create TODO
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm); 