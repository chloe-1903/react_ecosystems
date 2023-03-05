import React from 'react'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { removeTodo } from './actions';

const TodoList = ({todos = [], onRemovedPressed}) => (
    <div className='list-wrapper'>
        <NewTodoForm />
        {todos.map((todo) => <TodoListItem key={todo.id} todo={todo} onRemovedPressed={onRemovedPressed} />)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovedPressed: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);