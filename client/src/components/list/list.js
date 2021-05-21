import React from 'react';
import './list.css';

const ListItem = (props) => {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(props.image)}`} className="card-img-top card-sizing" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.label}</h5>
                        <button className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListItem;