import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import '../02-useEffect/effects.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [value, setValue] = useState(0);


    const increment = useCallback((number) => {
        setValue( val => val + number );
    },[setValue]);


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { value } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
