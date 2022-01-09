import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd'
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = (category) => {
    //     // forma 1
    //     // setCategories([category, ...categories]);
        
    //     // forma 2
    //     setCategories( catg => [...catg, category] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map( (category, index) => {
                        return <GifGrid key={index} category={category} />;
                    })
                }
            </ol>
        </>
    );
};
