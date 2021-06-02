import { AuthContext } from "../../auth/AuthContext";
import { mount } from 'enzyme';
import React from 'react';
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from 'react-router-dom';

describe('Tests on DashboardRoutes component', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Andres',
            logged: true
        }
    }

    test('should show correctly', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Andres');
    }); 
})
