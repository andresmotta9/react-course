import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests on <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );
    
    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should act the setUser and the expected argument', () => {
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id:123, 
            name:'Andres'
        })
    })
    
    

})
