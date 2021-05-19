import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( (num) =>  {
        setCounter( coun => coun + num );
    }, [ setCounter ]);

    useEffect( ()=> {
        // ?? if an use effect is needed to use with a funcion
        // it is recommended to use useCallback
    },[increment])

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
