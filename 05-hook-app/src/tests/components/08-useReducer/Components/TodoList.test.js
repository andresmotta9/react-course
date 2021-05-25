import React from 'react';
import {shallow} from 'enzyme';
import { TodoList } from '../../../../components/08-useReducer/components/TodoList';
import { demoTodos } from '../../../fixtures/demoTodos';

describe('Tests on <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoList 
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have two <TodoListItem />', () => {
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length);
    });

    test('should bring the correct props to <TodoListItem />', () => {
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
        expect( wrapper.find('TodoListItem').at(0).prop('handleToggle') ).toEqual( expect.any(Function) );
    });
    
})
