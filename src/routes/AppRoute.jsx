import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/auth'}>
                    <Route path={'login'} element={<Login />} />
                    <Route path={'register'} element={<Register />} />
                </Route>

                <Route path="*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </Router>
    )
}

export default AppRoute