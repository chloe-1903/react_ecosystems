import React, { useEffect } from 'react'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from './actions';
import { displayAlert, loadTodos } from './thunks';
import { isLoading } from './reducers';

const TodoList = ({todos = [], onRemovedPressed, onCompletePressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>
    const content = (<div className='list-wrapper'>
        <NewTodoForm />
        {todos.map((todo) => (
            <TodoListItem 
                key={todo.id} 
                todo={todo}
                onCompletePressed={(onCompletePressed)}
                onRemovedPressed={onRemovedPressed}
            />
        ))}
    </div>);
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodo(id)),
    onCompletePressed: id => dispatch(completeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);