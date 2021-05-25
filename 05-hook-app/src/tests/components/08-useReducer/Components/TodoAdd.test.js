import React from 'react';
import {shallow} from 'enzyme';
import { TodoAdd } from '../../../../components/08-useReducer/components/TodoAdd';

describe('Tests on <TodoAdd />', () => {

    const hanldeAddTodo = jest.fn();

    const wrapper = shallow( 
        <TodoAdd
            hanldeAddTodo={ hanldeAddTodo}
        /> 
    )

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });


    test('should not call the handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        
        expect( hanldeAddTodo ).toHaveBeenCalledTimes(0);
    });
    
    test('should call the hanldeAddTodo function', () => {
        
        const value = 'Learn Express';
        wrapper.find('input').simulate('change', { 
            target: { 
                value,
                name: 'description', 
            }}
        );
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        
        expect( hanldeAddTodo ).toHaveBeenCalledTimes(1);
        expect( hanldeAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( hanldeAddTodo ).toHaveBeenCalledWith( {
            id: expect.any(Number),
            desc: value,
            done: false,
         } );

        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
    
})
