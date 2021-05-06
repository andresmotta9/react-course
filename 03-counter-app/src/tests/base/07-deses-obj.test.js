import { retornaArreglo } from "../../base/07-deses-arr";


describe('Tests in desestructuration', () => {
    test('should return a string and a number', () => {
        
        const [ letters, numbers ] = retornaArreglo(); //['ABC', 123];

        // expect ( arr ).toEqual( ['ABC', 123] );
        expect ( letters ).toEqual( 'ABC' );
        expect ( typeof letters ).toEqual( 'string' );
        
        expect ( numbers ).toEqual( 123 );
        expect ( typeof numbers ).toEqual( 'number' );
    })
})
