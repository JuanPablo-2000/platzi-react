import React from 'react'
import Layout from '../containers/Layout/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;