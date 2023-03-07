import { createSelector } from "reselect";

export const getTodos = state => state.todos.data;
export const getIsLoading = state => state.todos.isLoading;

// createSelector uses memoization (++ performance)
export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted)
)

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted)
)