import { expect } from "chai";
import { todos } from "../reducers";

describe('The todos reducer', () => {
    it('Add a new todo when CREATE_TODO action is received', () => {
        const fakeTodo = { text: 'hello' };
        const fakeAction = { 
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo
            }
        };

        const originalState = {
            isLoading: false,
            data: []
        }
        const expectedState = {
            isLoading: false,
            data: [fakeTodo]
        }
        const actualState = todos(originalState, fakeAction);
        expect(actualState).to.deep.equal(expectedState);
    });
})