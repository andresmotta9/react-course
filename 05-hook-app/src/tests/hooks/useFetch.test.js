import { useFetch } from "../../hooks/useFetch";
import { renderHook } from "@testing-library/react-hooks";

describe('Tests on useFetch hook', () => {
    
    test('should return the default info', () => {
        
        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
        const { data, loading, error} = result.current;
        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);

    });
    
    test('should return the expected info, loading false, error false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
        await waitForNextUpdate({ timeout: 5000 });
        
        const { data, loading, error} = result.current;

        expect( data.length ).toBe(1);
        expect( loading ).toBe(false);
        expect( error ).toBe(null);

    });

    test('should handle the error', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/api4234234232/users?page=2') );
        await waitForNextUpdate({ timeout: 5000 });
        
        const { data, loading, error} = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(false);
        expect( error ).toBe('No se pudo cargar la info');

    });
    
})
