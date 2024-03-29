import React, { useEffect } from 'react'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { completeTodoRequest, loadTodos, removeTodoRequest } from './thunks';
import { getCompletedTodos, getIncompleteTodos, getIsLoading } from './selectors';
import styled from 'styled-components';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({incompleteTodos = [], completedTodos = [], onRemovedPressed, onCompletePressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>
    const content = (<ListWrapper>
        <NewTodoForm />
        <h3>Incomplete todos:</h3>
        {incompleteTodos.map((todo) => (
            <TodoListItem 
                todo={todo}
                key={todo.id} 
                onCompletePressed={(onCompletePressed)}
                onRemovedPressed={onRemovedPressed}
            />
        ))}
        <h3>Completed todos:</h3>
        {completedTodos.map((todo) => (
            <TodoListItem 
                todo={todo}
                key={todo.id} 
                onCompletePressed={(onCompletePressed)}
                onRemovedPressed={onRemovedPressed}
            />
        ))}
    </ListWrapper>);
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(completeTodoRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);