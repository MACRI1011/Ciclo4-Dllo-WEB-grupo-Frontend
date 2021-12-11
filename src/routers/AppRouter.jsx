import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from '../components/login/Login';
import ContentRoutes from './ContentRoutes';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route path="/*" element={<ContentRoutes />} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter