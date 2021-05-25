import React from 'react';
import { shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests on <TodoApp />', () => {
    
    const wrapper = shallow( <TodoApp />);

    test('should show correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('should delete a TODO', () => {
        
        wrapper.find('TodoAdd').prop('hanldeAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 0 )');
    });
    
    
})  
