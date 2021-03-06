import { useReducer } from "react";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Tests on todoReducer', () => {

    test('should return the defualt state', () => {
        const state = todoReducer( demoTodos, {});
        expect( state ).toEqual(demoTodos);
    });

    test('should add a new TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Learn Node',
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer( demoTodos, action);

        expect( state.length ).toBe(3);
        expect( state ).toEqual([...demoTodos, newTodo]);
    });

    test('should delete a TODO', () => {

        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer( demoTodos, action);

        expect( state.length ).toBe(1);
        expect( state ).toEqual([demoTodos[1]]);

    });

    test('should toggle the TODO', () => {

        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer( demoTodos, action);


        expect( state[0].done ).toBe(true);
        expect( state[1] ).toEqual(demoTodos[1]);
    });
    
})
