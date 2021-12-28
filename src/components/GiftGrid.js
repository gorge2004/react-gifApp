import React from 'react'
import GridItem from './GridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GiftGrid = ({ category }) => {
    const {data: images,loading} = useFetchGifs(category);
   
    
    return (
        <>

            <h3 className=" animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className=" animate__animated animate__fadeIn">Cargando</p> } 
            <div className="card-grid">
                {images.map(img =>
                    <GridItem
                        key={img.id}
                        {...img}
                    />)}

            </div>

        </>
    )
}



export default GiftGrid;
