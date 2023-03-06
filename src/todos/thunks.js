import { createTodo, loadTodosFailure, loadTodosInProgress, loadTodosSuccess } from "./actions";


export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    } catch (error) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(error))
    }
}

export const addTodo = (text) => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({text});
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (error) {
        dispatch(displayAlert(error))
    }
}

export const displayAlert = text => () => {
    alert(text);
}