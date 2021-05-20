import React from 'react';
import './image.css';

const Img = (props) => {
    return (
        <>
            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(props.image)}`} alt="" id="singleQR"></img>
        </>
    )
}

export default Img;