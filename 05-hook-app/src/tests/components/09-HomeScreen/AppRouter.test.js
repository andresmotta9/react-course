import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests on <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'Andres'
    }
    
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should show correcty', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    

})
