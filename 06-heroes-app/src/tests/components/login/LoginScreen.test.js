import React from 'react';
import { mount } from "enzyme";
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';


describe('Tests on <LoginScreen />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const historyMock = {
        replace: jest.fn(),
    }
    
    test('should show correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock}/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should do the dispatch and navigation', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock}/>
            </AuthContext.Provider>
        );

        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();
        
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Andres'
            }
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect( historyMock.replace ).toHaveBeenCalledWith('/dc');
    });
    
})
