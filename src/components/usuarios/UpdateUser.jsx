import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import GET_USUARIO_BY_ID from '../../apollo/gql/getUsuarioById';
import UPDATE_USER from '../../apollo/gql/updateUser';
import useAuth from '../../hooks/useAuth';

const UpdateUser = () => {
    const auth =useAuth()
    const user = localStorage.getItem("user")
    console.log(user)

    const {id} = useParams();
    const navigate = useNavigate();
    const {loading, data, error} =useQuery(GET_USUARIO_BY_ID, {
        variables: {
            id
        }
    });
    const [updateUsuario] = useMutation(UPDATE_USER);
    const {register, handleSubmit} = useForm();
    const handleUpdate = (args) => {
        console.log('actualizar');
        console.log(data);

        const {id,nombre, email, cc, rol, password } = args;

        updateUsuario({ variables: {  id:auth.user.id, nombre, email, cc, rol, password} });

        navigate('/usuarios');
    };

    return (
        <>
        {error && <h1>error</h1>}
        {loading && <h1>datos</h1>}
        {data && <div>
            <h2 className="mb-4">Editar Usuario</h2>
            <hr />
            <div className="card col-md-8 mx-auto">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <div className="mb-3">
                        <label htmlFor="producto" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" defaultValue={data.usuarioById.nombre} {...register("nombre", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Email:</label>
                        <input type="text" className="form-control"defaultValue={data.usuarioById.email} {...register("email", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">CC:</label>
                        <input type="text" className="form-control" defaultValue={data.usuarioById.cc} {...register("cc", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Rol:</label>
                        <input type="text" className="form-control" value={data.usuarioById.rol} {...register("rol", { required: true })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Estado:</label>
                        <input type="text" className="form-control" value={data.usuarioById.estado} {...register("estado", { required: true })} />
                    </div>

                    <br />
                    <button type="submit" className="btn btn-success">Actualizar Estado</button>
                    <br /> <br />

                    

                </form>
            </div>
        </div>}
    </> 
    )
}

export default UpdateUser
