import React from 'react';

const Img = (props) => {
    return (
        <>
            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(props.image)}`}></img>
        </>
    )
}

export default Img;