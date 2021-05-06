import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Test with promises', () => {
    test('getHeroeByIdAsync should return a hero async', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toBe( heroes[0] );
                done();
            });
    });
    
    test('should return an error if the hero by id does not exist', ( done ) => {

        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
})
