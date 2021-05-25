import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Tests on useForm hook', () => {

    const initalForm = {
        name: 'andres',
        email:'andres@gmail.com'
    };

    test('should return a form by default', () => {
        
        const { result } = renderHook( () => useForm(initalForm));
        const [values , handleInputChange, reset] = result.current;
        expect( values.name ).toBe('andres');
        expect( values.email ).toBe('andres@gmail.com');
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('should update the form value (update name)', () => {
        const { result } = renderHook( () => useForm(initalForm));
        const [ ,handleInputChange ] = result.current;
        const newName = 'German';
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: newName,
                }
            });
        })
        const [ values ] = result.current;
        expect( values ).toEqual( {...initalForm, name: newName} );
    });

    test('should reset the form with the reset func', () => {
        const { result } = renderHook( () => useForm(initalForm));
        const [ ,handleInputChange, reset ] = result.current;
        const newName = 'German';
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: newName,
                }
            });
            reset();
        })
        const [ values ] = result.current;
        expect( values ).toEqual( { ...initalForm } );
    });
    
})
