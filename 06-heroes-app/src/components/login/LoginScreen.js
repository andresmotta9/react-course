import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/'); //go to the specific url 
        history.replace('/'); //remove the url history with the obe specified
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
