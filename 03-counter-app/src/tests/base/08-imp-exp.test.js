import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Tets in heroes functions', () => {
    test('should return a hero by id', () => {
      
        const id = 1;
        const hero = getHeroeById(id);
        
        const heroData = heroes.find( hero => hero.id === id);

        expect ( hero ).toEqual( heroData );
    });
    
    test('should return an undefined if hero does not exist', () => {
      
        const id = 10;
        const hero = getHeroeById(id);

        expect ( hero ).toBe( undefined );
    })
    
    test('should return all the heroes by owner', () => {
      
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroData = heroes.filter( hero => hero.owner === owner);
        expect ( heroes ).toEqual( heroData );
        
    })

    test('should return an array with a length of 2', () => {
      
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect ( heroes.length ).toBe( 2 );

    })
})
