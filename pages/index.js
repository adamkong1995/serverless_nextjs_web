import React from 'react';
import Calculator from '../containers/Calculator';
import Header from '../containers/Header';
import axios from 'axios';
import { getRandomInt } from '../util/math';

const Home = props => {
    return (
        <div className="wrapper">
            <Header />
            <div className="body">
                <Calculator {...props} />
            </div>
            
            <style jsx>{`
                .wrapper {
                    background-color:#ccf1ff;
                    margin: -8px;
                    height: 100vh;
                }
                .body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 90%;
                }
            `}</style>
        </div>
    )
};

// Server side api call
Home.getInitialProps = async () => {
    const baseUrl = process.env.environment === 'development' ? 'http://localhost:3000' : 'https://d113knf22cv90v.cloudfront.net' // OR your AWS api gateway
    const first = getRandomInt(10);
    const second = getRandomInt(10);

    const res = await axios.post(`${baseUrl}/api/add`, {
        first,
        second
    });
    return { 
        first: first,
        second: second ,
        result: res.data.result,
        operation: res.data.operation
     };
};

export default Home;