import React from 'react';
import { TodoListItem } from "../../../../components/08-useReducer/components/TodoListItem";
import { shallow } from 'enzyme'
import { demoTodos } from "../../../fixtures/demoTodos";

describe('Test on TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoListItem 
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('should match <TodoListItem /> correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('should call the handleDelete function', () => {

        wrapper.find('.btn').simulate('click');
        expect( handleDelete ).toHaveBeenCalled();
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    });

    test('should call the handleToggle function', () => {

        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    });
    
    test('should the copy correctly', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(`${demoTodos[0].id} ${demoTodos[0].desc}`);

    });

    test('should has the complete class if TODO.done is true', () => {
        
        const todo = demoTodos[0];
        todo.done = true
        
        const wrapper = shallow( 
            <TodoListItem 
                todo={todo}
            />
        );

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);

    });
    
})
