import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch(type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text, 
                id: Math.floor(Math.random() * 1000),
                isCompleted: false
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { id } = payload;
            return state.filter(todo => todo.id != id);
        }
        default: {
            return state;
        }
    }
}