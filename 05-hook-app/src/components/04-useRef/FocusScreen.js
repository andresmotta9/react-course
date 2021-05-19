import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>   
            <hr />
            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="your name"
            />          
            <button 
                className="mt-4 btn btn-outline-primary"
                onClick={handleClick}    
            >
                Focus
            </button>
        </>
    )
}
