import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const auth = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('logout');
        auth.logout();
        navigate('/login', {
            replace: true
        });
    }

    const perfil = auth.user.rol;
    const user = sessionStorage.getItem("user")
    // const user = JSON.parse(sessionStorage.getItem('user'));
//    const data=  JSON.parse(user);

    return (
        <nav className='navbar text-center navbar-expand-sm navbar-dark bg-success nav-pills'>
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
                            href="/proyectos">Ver tods los proyectos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            href="/misProyectos">Mis proyectos</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>

                    </div>
                </div>
            }

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                    {(`${auth.user.nombre} | ${auth.user.rol}`)}
                    </span>

                    <NavLink
                className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                to={`/updateUser/${auth.user.id}`}
                >
                Actualizar Perfil
            </NavLink>

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