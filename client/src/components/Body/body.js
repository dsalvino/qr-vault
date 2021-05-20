import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Vault from '../vault/vault';
import Generate from '../generate/generate';
import { Container } from '../Container/container';

const Body = () => {

    const [qrText, setQrText] = useState();
    const [frame, setFrame] = useState();
    const [qrImage, setQrImage] = useState();

    useEffect(() => {
    }, [qrImage])

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Vault>
                        {/* todo ternary expression */}
                        {qrImage && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(qrImage)}`} alt="img"></img>}
                    </Vault>
                    <Generate />
                </div>
            </div>
        </>
    )
}

export default Body;