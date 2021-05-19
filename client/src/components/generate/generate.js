import React, { useState } from 'react';
import axios from 'axios';

const Generate = () => {
    const [qrText, setQrText] = useState();
    const [frame, setFrame] = useState();
    const [qrImage, setQrImage] = useState();


    const handleChange = (e) => {
        setFrame(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const userInput = {
            qr_code_text: qrText,
            frame_name: frame
        }
        console.log(userInput)
        try {
            const response = await axios.post('/api/generate', userInput);
            console.log(response.data);
            setQrImage(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className="col-md-7" id="aside">
                <div className="h-75 d-flex justify-content-center align-items-center">
                    <form className="col-md-5 form-background needs-validation" id="customer-form" onSubmit={handleSubmit}>
                        <div className="mx-auto my-auto">
                            <h3>Generate QR Code here</h3>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">qr code text</label>
                            <textarea className="form-control" aria-label="With textarea" onChange={e => setQrText(e.target.value)}></textarea>
                        </div>
                        <select className="form-select" aria-label="Default select example" value={frame} onChange={handleChange}>
                            <option selected disabled>frame name</option>
                            <option value="no-frame">no frame</option>
                            <option value="bottom-frame">bottom frame</option>
                            <option value="bottom-tooltip">bottom tooltip</option>
                            <option value="top-header">top header</option>
                        </select>
                        <div className="mb-3">
                            <div className="d-grid gap-1 mx-auto col-4 mt-3">
                                <button className="btn btn-primary" type="submit">Generate</button>
                            </div>
                            <img src={qrImage} alt="img"></img>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Generate;

