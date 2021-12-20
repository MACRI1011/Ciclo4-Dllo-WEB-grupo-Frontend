import { useQuery } from '@apollo/client';
import React from 'react'
import { NavLink } from 'react-router-dom';
import GET_USUARIOS from '../../apollo/gql/getUsuarios';

const Usuario = () => {

    const { loading, data, error } = useQuery(GET_USUARIOS);

    const handleDelete = (id) => {
        console.log('delete');
    }

    console.log(data);
    
    return (
        <>
            <div>
                <h1>Gestión de Usuarios</h1>
            </div>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {
                data &&
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nº</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">CC</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.Usuarios.map((usuario, index) => (
                                <tr key={usuario.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.cc}</td>
                                    <td>{usuario.rol}</td>
                                    <td>{usuario.estado}</td>
                                    <td>
                                        <NavLink className="btn btn-primary mr" to={`/updateEstadoUser/${usuario.id}`}>
                                            Editar
                                        </NavLink>
                                        <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas" onClick={() => handleDelete(usuario.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }

        </>


    )
}

export default Usuario