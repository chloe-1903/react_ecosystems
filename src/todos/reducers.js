import { 
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
    COMPLETE_TODO,
    CREATE_TODO,
    REMOVE_TODO 
} from "./actions";

const initialState = {
    isLoading: false,
    data: []
}

export const todos = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state, 
                data: state.data.concat(todo)
            };
        }
        case REMOVE_TODO: {
            const { id } = payload;
            return {
                ...state, 
                data: state.data.filter(todo => todo.id != id)
            };
        }
        case COMPLETE_TODO: {
            const { id } = payload;
            const data = state.map(todo => {
                if (todo.id === id) {
                    return {...todo, isCompleted: true}
                }
                return todo;
            });
            return { ...state, data }
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return { ...state, isLoading: false, data: todos };
        }
        case LOAD_TODOS_IN_PROGRESS: {
            return { ...state, isLoading: true }; 
        } case LOAD_TODOS_FAILURE: {
            return { ...state, isLoading: false }; 
        }
        default: {
            return state;
        }
    }
};