import React from 'react'
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {

    return (
        <div className="card  animate__animated animate__fadeInLeft">
            <img alt={title} src={url} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem;
