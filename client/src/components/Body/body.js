import React from 'react';
import Vault from '../vault/vault';
import Generate from '../generate/generate';

const Body = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Vault />
                    <Generate />
                </div>
            </div>
        </>
    )
}

export default Body;