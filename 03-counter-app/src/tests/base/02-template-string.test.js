import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';


describe('Test in 02-template-string.js', () => {

    test('getSaludo should return -Hola Andres!-', () => {

        const name = 'Andres';

        const greet = getSaludo(name); 

        expect( greet ).toBe( 'Hola ' + name + '!'); 
    });

    test('getSaludo should return -Hola Carlos!- if there is not any parameter in the function', () => {

        const greet = getSaludo(); 

        expect( greet ).toBe( 'Hola Carlos!'); 
    });

})
