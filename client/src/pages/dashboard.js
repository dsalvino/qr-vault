import React, { useEffect, useState } from 'react';
// import Body from '../components/Body/body';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Container from '../components/Container/container';
import Img from '../components/Image/image';
import { Form, Select, Option } from '../components/form/form';
import { Col } from '../components/Col/col';
import ListItem from '../components/list/list';

const Dashboard = () => {
    const [qrText, setQrText] = useState();
    const [frame, setFrame] = useState();
    const [qrImage, setQrImage] = useState();
    const [vault, setVault] = useState([]);
    const [label, setLabel] = useState();

    let history = useHistory();
    useEffect(() => {
        try {
            async function auth() {
                const response = await axios.get('/api/user/all')
                setVault(response.data.codes);
                if (!response.data) {
                    history.push('/signup');
                }
            }
            auth();
        } catch (err) {
            console.error(err);
        }
    }, [])

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

    const saveCode = async e => {
        e.preventDefault();
        const userCode = {
            qrCode: qrImage,
            // todo
            label: label,
        }
        console.log(userCode)
        try {
            const response = await axios.post('/api/user', userCode);
            setVault([...vault, response.data]);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <>
            <div className='container-fluid'>
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
                                    {/* create another text are for label */}
                                    <textarea className="form-control form" aria-label="With textarea"
                                        onChange={e => setQrText(e.target.value)}>
                                    </textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">label</label>
                                    {/* create another text are for label */}
                                    <textarea className="form-control form" aria-label="With textarea"
                                        onChange={e => setLabel(e.target.value)}>
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
                                        { qrImage && <button className="btn btn-primary" type="button" onClick={saveCode}>SaveCode</button>}
                                    </div>
                                </div>
                            </Form>
                        </Container>
                    </Col>
                    {vault.length ? (
                        <div className='row row-cols-1 row-cols-md-3 g-4 mb-5'>
                            {vault.map(vaultItem => {
                                return (
                                    <ListItem
                                    key={vaultItem._id} 
                                    label={vaultItem.label}
                                    image={vaultItem.qrCode}>
                                    </ListItem>
                                );
                            })}
                        </div>
                    ) : (
                        <h3>no codes</h3>
                    )}
                </div>
            </div>
        </>
    )
}

export default Dashboard;