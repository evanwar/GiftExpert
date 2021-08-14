import React from 'react'

export const GifGridItem = ({ id, title, url }) => {



    return (
        <div className="card animate__animated animate__fadeInLeft">
            <img alt={title} src={url} />
            <p>{title}</p>
        </div>
    )
}
