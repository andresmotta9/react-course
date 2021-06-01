import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/'); //go to the specific url 

        const lastPath = localStorage.getItem('lastPath') || '/'

        const action = { 
            type: types.login,
            payload: {
                name: 'Andres'
            },
        }
        
        dispatch(action);
        history.replace(lastPath); //remove the url history with the obe specified
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
