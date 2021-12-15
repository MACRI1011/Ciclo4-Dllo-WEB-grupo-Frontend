import React from 'react'

import {
    Routes,
    Route
} from "react-router-dom";
import NavBar from '../components/container/NavBar';
import AddProyecto from '../components/proyectos/AddProyecto';
import EditProyecto from '../components/proyectos/EditProyecto';
import Proyectos from '../components/proyectos/Proyectos';
import Usuario from '../components/usuarios/Usuario';

const ContentRoutes = () => {
    return (
        <>

            <NavBar />
            <Routes>
                <Route path="/usuarios" element={<Usuario />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/addProyecto" element={<AddProyecto />} />
                <Route path="/editProyecto/:id" element={<EditProyecto />} />

                <Route path="/" element={<Usuario />} />
            </Routes>

        </>
    )
}

export default ContentRoutes