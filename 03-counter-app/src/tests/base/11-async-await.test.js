import { getImagen } from "../../base/11-async-await";

describe('Test async await and fetch', () => {
    test('should return the image url', async() => {
        const url = await getImagen();
        expect( url.includes('https://')).toBe( true );
    });
})
