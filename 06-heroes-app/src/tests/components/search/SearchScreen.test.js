import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Tests on <SearchScreen />', () => {
    
    test('should show correctly with the default values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero');
    });

    test('should show a Batman and the input with the query string value', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        
        expect( wrapper.find('input').prop('value') ).toBe('batman')
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show an error if the hero is not found', () => {
        
        const query = 'batman123'
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${query}`]}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        expect( wrapper.find('.alert-danger').text().trim() ).toBe(`There is not a hero with ${query}`);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should call the history push', () => {
        const history = {
            push: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                    path="/search" 
                    component={() => <SearchScreen history={history}/>}
                />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', {
            target: {
                name: 'heroInput',
                value: 'batman'
            }
        });
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect( history.push ).toHaveBeenCalledWith(`?q=batman`);
    })
    
    
    
})
