import React from 'react'

const GridItem = ({id, title, url}) => {
    return (
        <div className="animate__animated card animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GridItem.propTypes = {

}

export default GridItem
