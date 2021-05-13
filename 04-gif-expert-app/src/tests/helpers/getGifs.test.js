import { getGifs } from "../../helpers/getGifs";

describe('Tests on getGifs Fetch', () => {

    test('should return 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe(10);
    });

    test('should return 10 elements', async () => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });
    
})
