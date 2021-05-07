import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from '../CounterApp'

describe('Test the CounterApp component', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })

    test('should show <CounterApp /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show 100 as default value in the counter', () => {
        const counterReset = 100;
        const wrapper = shallow(<CounterApp value={counterReset}/>);
        const counterNumber = wrapper.find("#counter").text().trim();
        expect( counterReset ).toBe( parseInt( counterNumber ) );
    });

    test('should the counter increase when clicking the +1 button', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterNumber = wrapper.find("#counter").text().trim();
        expect( counterNumber ).toBe('11');

    });

    test('should the counter increase reset when the rest button is pressed', () => {
        
        wrapper = shallow(<CounterApp value={ 105 }/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterNumber = wrapper.find("#counter").text().trim();
        expect( counterNumber ).toBe('105');

    });
    
    test('should the counter increase when clicking the -1 button', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterNumber = wrapper.find("#counter").text().trim();
        expect( counterNumber ).toBe('9');

    });
    
    
})
