import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Tests on useCounter hook', () => {
    test('should return the values by default', () => {

        const { result } = renderHook( () => useCounter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('should return the counter value to 100', () => {

        const { result } = renderHook( () => useCounter(100));

        expect(result.current.counter).toBe(100);

    });

    test('should increment the counter in 1', () => {
        
        const { result } = renderHook( () => useCounter(100));

        const { increment } = result.current;

        act( () => {
            increment();
        });

        const { counter } = result.current;

        expect( counter ).toBe(101);

    });

    test('should decremet the counter in 1', () => {
        
        const { result } = renderHook( () => useCounter(100));

        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;

        expect( counter ).toBe(99);

    });
    
    test('should reset the counter to the default value', () => {
        
        const { result } = renderHook( () => useCounter(100));

        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });

        const { counter } = result.current;

        expect( counter ).toBe(100);

    });
    
})
