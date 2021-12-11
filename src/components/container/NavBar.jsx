import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('logout');
        navigate('/login', {
            replace: true
        });
    }

    // Ejemplo para generar NavBars distitntos según el rol del usuario
    const perfil = "Administrador";
    // const perfil = "Estudiante";
    // const perfil = "Lider";

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-success'>
            <Link
                className='navbar-brand'
                to="/"
            >
                BuenaMedallOta
            </Link>

            {
                perfil === 'Administrador' &&
                <div className='navbar-collapse'>
                    <div className='navbar-nav'>
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/usuarios"
                        >
                            Gestión de Usuarios
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/proyectos"
                        >
                            Gestión de Proyectos
                        </NavLink>

                    </div>
                </div>
            }

            {
                perfil === 'Lider' &&
                <div className='navbar-collapse'>
                    <div className='navbar-nav'>
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/usuarios"
                        >
                            Gestión de Estudiantes
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/proyectos"
                        >
                            Gestión de Proyectos
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/inscripciones"
                        >
                            Gestión de Inscripciones
                        </NavLink>

                    </div>
                </div>
            }

            {
                perfil === 'Estudiante' &&
                <div className='navbar-collapse'>
                    <div className='navbar-nav'>

                        <NavDropdown title="Gestión de Proyectos" id="basic-nav-dropdown">
                            <NavDropdown.Item className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/proyectos">Ver proyectos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/proyectos">Mis proyectos</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>

                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/inscripciones"
                        >
                            Gestión de Inscripciones
                        </NavLink>

                    </div>
                </div>
            }

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        Santiago
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar