export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (text) => ({
    type: CREATE_TODO, 
    payload: {text}
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (id) => ({
    type: REMOVE_TODO, 
    payload: {id}
});


export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodo = (id) => ({
    type: COMPLETE_TODO, 
    payload: {id}
});