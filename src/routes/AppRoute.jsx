import React, { useContext, useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { usuarioContext } from '../context/usuarioContext';

import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Home from '../pages/home';
import Suscription from '../pages/suscription';
import RouteAuth from './RouteAuth';
import RoutePrivate from './RoutePrivate';
import { extractToken } from '../helpers/helper';

const AppRoute = () => {

    const { state, setContext } = useContext(usuarioContext);
    const { isAuthenticated } = state;

    function getToken() {
        let json = extractToken();
        if (json == null) return;
        setContext({
            ...json
        });
    }

    useEffect(() => {
        getToken();
    }, []);

    return (
        <Router>
            <Routes>

                {/* Routes Authentications */}
                <Route path={'/auth'} element={
                    <RouteAuth isAuthenticated={isAuthenticated} />
                }>
                    <Route path={'login'} element={<Login />} />
                    <Route path={'register'} element={<Register />} />
                </Route>

                {/* Routes Private */}
                <Route element={<RoutePrivate isAuthenticated={isAuthenticated} />}>
                    <Route path={"/suscription"} element={<Suscription />} />
                </Route>

                {/* Routes Publics */}
                <Route path={'/'} element={<Home />} />
                <Route path="*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </Router >
    )
}

export default AppRoute