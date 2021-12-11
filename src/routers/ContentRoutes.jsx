import React from 'react'

import {
    Routes,
    Route
} from "react-router-dom";
import NavBar from '../components/container/NavBar';
import Proyectos from '../components/proyectos/Proyectos';
import Usuario from '../components/usuarios/Usuario';

const ContentRoutes = () => {
    return (
        <>

            <NavBar />
            <Routes>
                <Route path="/usuarios" element={<Usuario />} />
                <Route path="/proyectos" element={<Proyectos />} />

                <Route path="/" element={<Usuario />} />
            </Routes>

        </>
    )
}

export default ContentRoutes