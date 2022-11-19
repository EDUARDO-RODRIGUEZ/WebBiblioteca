import React, { useContext } from 'react'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { usuarioContext } from '../context/usuarioContext';

import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Home from '../pages/home';
import RouteAuth from './RouteAuth';
import RoutePrivate from './RoutePrivate';

const AppRoute = () => {

    const { state } = useContext(usuarioContext);
    const { isAuthenticated } = state;

    return (
        <Router>
            <Routes>

                {/* Routes Authentications */}
                <Route path={'/auth'} element={<RouteAuth isAuthenticated={isAuthenticated} />}>
                    <Route path={'login'} element={<Login />} />
                    <Route path={'register'} element={<Register />} />
                </Route>

                {/* Routes Private */}
                <Route element={<RoutePrivate isAuthenticated={isAuthenticated} />}>

                </Route>

                {/* Routes Publics */}
                <Route path={'/'} element={<Home />} />

                <Route path="*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </Router>
    )
}

export default AppRoute