import React from 'react'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from './actions';
import { displayAlert } from './thunks';

const TodoList = ({todos = [], onRemovedPressed, onCompletePressed}) => (
    <div className='list-wrapper'>
        <NewTodoForm />
        {todos.map((todo) => (
            <TodoListItem 
                key={todo.id} 
                todo={todo}
                onCompletePressed={(onCompletePressed)}
                onRemovedPressed={onRemovedPressed}
            />
        ))}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovedPressed: id => dispatch(removeTodo(id)),
    onCompletePressed: id => dispatch(completeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);