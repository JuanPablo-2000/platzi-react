import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import PasswordRecovery from '../pages/PasswordRecovery';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/password-recovery' element={<PasswordRecovery />} />
                    
                    <Route path='/send-email' element={<SendEmail />} />
                    <Route path='/new-password' element={<NewPassword />} />

                    <Route path='/account' element={<MyAccount />} />
                    <Route path='/signup' element={<CreateAccount />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;