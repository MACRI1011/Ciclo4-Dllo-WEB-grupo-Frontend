import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import GET_USUARIO_BY_ID from '../../apollo/gql/getUsuarioById';
import UPDATE_USER from '../../apollo/gql/updateUser';
import useAuth from '../../hooks/useAuth';

const UpdateUser = () => {
    const auth = useAuth()
    const user = sessionStorage.getItem("user")
    console.log(user)

    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, data, error } = useQuery(GET_USUARIO_BY_ID, {
        variables: {
            id
        }
    });

    const [updateUsuario] = useMutation(UPDATE_USER);
    const { register, handleSubmit } = useForm();
    const handleUpdate = (args) => {
        console.log('actualizar');
        console.log(data);

        const { nombre, cc, password } = args;

        updateUsuario({ variables: { id: auth.user.id, nombre, cc, password } });

        navigate('/usuarios');
    };

    return (
        <>
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <div>
                <h2 className="mb-4">Actualizar mi perfil</h2>
                <hr />
                <div className="card col-md-8 mx-auto">
                    <div className="card-body"></div>
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <div className="mb-3">
                            <label htmlFor="producto" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" defaultValue={data.usuarioById.nombre} {...register("nombre", { required: false })} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Email:</label>
                            <input type="text" className="form-control" value={data.usuarioById.email} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Nueva contraseña:</label>
                            <input type="password" className="form-control" {...register("password", { required: false })} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">CC:</label>
                            <input type="number" className="form-control" defaultValue={data.usuarioById.cc} {...register("cc", { required: false })} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Rol:</label>
                            <input type="text" className="form-control" value={data.usuarioById.rol} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Estado:</label>
                            <input type="text" className="form-control" value={data.usuarioById.estado} />
                        </div>

                        <br />
                        <button type="submit" className="btn btn-success">Actualizar datos</button>
                        <br /> <br />

                        <a href="/proyectos">
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </a>

                    </form>
                </div>
            </div>}
        </>
    )
}

export default UpdateUser