import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

            
            <div className='card-grid'>
                {
                    data.map( img => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }
            </div>

        </>
    )
};

export default GifGrid;