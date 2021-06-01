import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Tests on authReducer', () => {
    
    test('should return the default state', () => {
        const { logged } = authReducer({ logged: false }, {});
        expect( logged ).toBe(false);
    });
    
    test('should authenticate and set the user name', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'andres'
            }
        }

        const user = authReducer({ logged: false }, action);

        expect( user ).toEqual({ name: 'andres', logged: true});
    });
    
    test('should remove the user name and set logged in false', () => {

        const action = {
            type: types.logout,
        }

        const user = authReducer({ name: 'andres', logged: true}, action);

        expect( user ).toEqual({ logged: false});
    });
    
})
