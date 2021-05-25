import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests on <HomeScreen />', () => {

    const user = {
        name: 'Andres',
        email: 'andresmotta9@gmail.com'
    }

    const wrapper = mount( 
     <UserContext.Provider value={{
        user
     }}>
         <HomeScreen />
     </UserContext.Provider>
    );

    test('should show correctly', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });
    
    
})
