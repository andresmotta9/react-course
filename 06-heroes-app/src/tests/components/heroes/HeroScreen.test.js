import React from 'react';
import { mount } from "enzyme";
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from "react-router-dom";


describe('Tests on <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    
    test('should show the redirect comp if there is not an argument in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock}/>
            </MemoryRouter> 
        );
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    })
    
    test('should show a hero if there is a valid argument in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ HeroScreen} />
            </MemoryRouter> 
        );
        expect( wrapper.find('.row').exists() ).toBe(true);
    });

    test('should return to the previous window with the PUSH', () => {
        
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId"
                    component={ ( ) => <HeroScreen history={history} />}
                />
            </MemoryRouter> 
        );

        wrapper.find('button').prop('onClick')();
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();
    }); 

    test('should return to the previous window with the GOBACK', () => {
    
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId"
                    component={ ( ) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter> 
        );

        wrapper.find('button').prop('onClick')();
        expect( historyMock.goBack ).toHaveBeenCalled();
        expect( historyMock.push ).toHaveBeenCalledTimes(0);
    }); 
    
    test('should call the redirect if the hero does not exist', () => {
    
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider12345']}>
                <Route 
                    path="/hero/:heroeId"
                    component={ ( ) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter> 
        );

        expect( wrapper.text() ).toBe('');
        
    }); 
    
    
})
