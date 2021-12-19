import { useQuery } from '@apollo/client';
import React from 'react'
import { NavLink } from 'react-router-dom';
import GET_INSCRIPCIONES from '../../apollo/gql/getInscripcion';

const Inscripcion = () => {

    const { loading, data, error } = useQuery(GET_INSCRIPCIONES);

    const handleDelete = (id) => {
        console.log('delete');
    }

    console.log(data);
    
    return (
        <>
            <div>
                <h1>Gestión de Incripciones</h1>
            </div>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {
                data &&
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nº</th>
                            <th scope="col">Proyecto</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Fecha Ingreso</th>
                            <th scope="col">Fecha Egreso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.Inscripciones.map((inscripcion, index) => (
                                <tr key={inscripcion.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{inscripcion.proyecto_id}</td>
                                    <td>{inscripcion.usuario_id}</td>
                                    <td>{inscripcion.estado}</td>
                                    <td>{inscripcion.fechaIngreso}</td>
                                    <td>{inscripcion.fechaEgreso}</td>
                                    <td>
                                        <NavLink className="btn btn-primary mr" to={`/updateInscripciones/${inscripcion.id}`}>
                                            Editar
                                        </NavLink>
                                        <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas" onClick={() => handleDelete(inscripcion.id)}>Eliminar</button>
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

export default Inscripcion