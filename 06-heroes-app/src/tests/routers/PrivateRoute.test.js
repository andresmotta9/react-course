import { mount } from 'enzyme';
import React from 'react';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';


describe('Tests on <PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    test('should  show the component if the user is authenticated and save localstorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Ready</span> }
                    { ...props }
                />
            </MemoryRouter>
        );
        
        expect ( wrapper.find('span').exists() ).toBe(true);

    })
    
})
