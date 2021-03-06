import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = ['One Punch'] }) => {

    
    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'The Walking Dead'] );
    //     setCategories( cate => [...cate, 'The Walking Dead'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={ setCategories }/>
            <hr/>


            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    )
                }
            </ol>
        </>
    )
}
