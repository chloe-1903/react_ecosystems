import { 
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
    COMPLETE_TODO,
    CREATE_TODO,
    REMOVE_TODO 
} from "./actions";

export const isLoading  = (state = false, action) => {
    const { type } = action;
    switch(type) {
        case LOAD_TODOS_IN_PROGRESS: 
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE: 
            return false;
        default:
            return state;
    }
};

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
        case COMPLETE_TODO: {
            const { id } = payload;
            return state.map(todo => {
                if (todo.id === id) {
                    return {...todo, isCompleted: true}
                }
            });
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default: {
            return state;
        }
    }
};