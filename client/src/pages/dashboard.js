import React, { useEffect } from 'react';
import Body from '../components/Body/body';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    let history = useHistory();
    useEffect(() => {
        try {
            async function auth() {
                const response = await axios.get('/api/user')
                console.log(response)
                if (!response.data) {
                    history.push('/signup');
                }
            }
            auth();
        } catch (err) {
            console.error(err);
        }
    }, [])

    return (
        <>
            <Body />
        </>
    )
}

export default Dashboard;