import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Tests on AddCategory component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('should show <AddCategory /> correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change the input box', () => {
        const input = wrapper.find('input');
        const value = 'Hello world';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe(value);
    });
    
    test('should not submit the information', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean the text box', () => {
        const input = wrapper.find('input');
        const value = 'Goku';
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( input.prop('value') ).toBe("");
    });
    
})
