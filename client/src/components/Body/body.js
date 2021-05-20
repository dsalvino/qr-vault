import React, { useState } from 'react';
import axios from 'axios';

import { Col } from '../Col/col';
import Container from '../Container/container';
import Img from '../Image/image';
import { Form, Select, Option } from '../form/form';

const Body = () => {
    const [qrText, setQrText] = useState();
    const [frame, setFrame] = useState();
    const [qrImage, setQrImage] = useState();

    console.log(qrText)

    const handleChange = (e) => {
        setFrame(e.target.value);
        console.log("working", frame)
        
    }

    const handleSubmit = async e => {
        console.log('working')
        e.preventDefault();
        const userInput = {
            qr_code_text: qrText,
            frame_name: frame
        }
        console.log(userInput)
        try {
            const response = await axios.post('/api/generate', userInput);
            console.log(response.data)
            setQrImage(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className='container-fluid h-75'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <Col size="md-5" id="aside">
                        <Container>
                            {/* todo ternary expression */}
                            <Img
                                image={qrImage}>
                            </Img>
                        </Container>
                    </Col>
                    <Col size="md-7" id="aside">
                        <Container>
                            <Form onSubmit={handleSubmit}>
                                <div className="mx-auto my-auto">
                                    <h3>Generate QR Code here</h3>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">qr code text</label>
                                    <textarea className="form-control form" aria-label="With textarea"
                                        onChange={e => setQrText(e.target.value)}>
                                    </textarea>
                                </div>
                                <Select value={frame} onChange={handleChange}>
                                    <Option selected disabled>frame name</Option>
                                    <Option value="no-frame">no frame</Option>
                                    <Option value="bottom-frame">bottom frame</Option>
                                    <Option value="bottom-tooltip">bottom tooltip</Option>
                                    <Option value="top-header">top header</Option>
                                </Select>
                                <div className="mb-3">
                                    <div className="d-grid gap-1 mx-auto col-4 mt-3">
                                        <button className="btn btn-primary" type="submit">Generate</button>
                                        <button className="btn btn-primary" type="submit">Generate</button>
                                    </div>
                                </div>
                            </Form>
                        </Container>
                    </Col>
                </div>
            </div>
        </>
    )
}

export default Body;