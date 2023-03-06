import React, { useEffect } from 'react'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { completeTodoRequest, loadTodos, removeTodoRequest } from './thunks';
import { getIsLoading, getTodos } from './selectors';

const TodoList = ({todos = [], onRemovedPressed, onCompletePressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>
    const content = (<div className='list-wrapper'>
        <NewTodoForm />
        {todos.map((todo) => (
            <TodoListItem 
                todo={todo}
                key={todo.id} 
                onCompletePressed={(onCompletePressed)}
                onRemovedPressed={onRemovedPressed}
            />
        ))}
    </div>);
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(completeTodoRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);