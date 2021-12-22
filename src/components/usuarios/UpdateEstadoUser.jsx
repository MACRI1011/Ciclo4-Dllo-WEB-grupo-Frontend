import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import GET_USUARIO_BY_ID from '../../apollo/gql/getUsuarioById';
import UPDATE_ESTADO_USER from '../../apollo/gql/updateEstadoUser';
import useAuth from '../../hooks/useAuth';

const UpdateEstadoUser = () => {

    const auth = useAuth();

    const { id } = useParams();

    const navigate = useNavigate();

    const { loading, data, error } = useQuery(GET_USUARIO_BY_ID, {
        variables: {
            id
        }
    });

    const [updateEstadoUsuario] = useMutation(UPDATE_ESTADO_USER);

    const { register, handleSubmit } = useForm();
    const handleUpdate = (args) => {
        console.log('actualizar');
        console.log(data);

        const { estado } = args;

        updateEstadoUsuario({ variables: { id, estado } });

        navigate('/usuarios');
    };

    return (
        <>
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {(data && auth.user.rol === "Administrador") && 
            <div>
                <h2 className="mb-4">Autorizar usuario</h2>
                <hr />
                <div className="card col-md-8 mx-auto">
                    <div className="card-body"></div>
                    <form onSubmit={handleSubmit(handleUpdate)}>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Seleccione un estado:</label>
                            <div>
                            <select {...register("estado", { required: true })}>
                                <option placeholder='Seleccione un estado'></option>
                                <option value="Autorizado">Autorizado</option>
                                <option value="No autorizado">No autorizado</option>
                            </select>
                        </div>
                           
                        </div>

                        <br />
                        <button type="submit" className="btn btn-success">Actualizar Estado</button>
                        <br /> <br />

                        <a href="/usuarios">
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </a>

                    </form>
                </div>
            </div>}

            {(data && auth.user.rol === "Lider") && 
            <div>
                <h2 className="mb-4">Autorizar estudiante</h2>
                <hr />
                <div className="card col-md-8 mx-auto">
                    <div className="card-body"></div>
                    <form onSubmit={handleSubmit(handleUpdate)}>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Seleccione un estado:</label>
                            <div>
                            <select {...register("estado", { required: true })}>
                                <option placeholder='Seleccione un estado'></option>
                                <option value="Autorizado">Autorizado</option>
                                <option value="Pendiente">Pendiente</option>
                            </select>
                        </div>
                           
                        </div>

                        <br />
                        <button type="submit" className="btn btn-success">Actualizar Estado</button>
                        <br /> <br />

                        <a href="/usuarios">
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </a>

                    </form>
                </div>
            </div>}
        </>
    )
}

export default UpdateEstadoUser