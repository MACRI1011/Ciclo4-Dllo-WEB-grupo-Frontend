import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import GET_USUARIO_BY_ID from '../../apollo/gql/getUsuarioById';
import UPDATE_ESTADO_USER from '../../apollo/gql/updateEstadoUser';
// import useAuth from '../../hooks/useAuth';


const UpdateEstadoUser = () => {
    //  const auth = useAuth();
    const {id} = useParams();
    const navigate = useNavigate();
    const {loading, data, error} =useQuery(GET_USUARIO_BY_ID, {
        variables: {
            id
        }
    });
    const [updateEstadoUsuario] = useMutation(UPDATE_ESTADO_USER);


    const {register, handleSubmit} = useForm();
    const handleUpdate = (args) => {
        console.log('actualizar');
        console.log(data);

        const { estado } = args;

        updateEstadoUsuario({ variables: { id, estado} });

        navigate('/usuarios');
    };

    return (
        <>
        {error && <h1>error</h1>}
        {loading && <h1>datos</h1>}
        {data && <div>
            <h2 className="mb-4">Editar Proyecto</h2>
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
                        <input type="text" className="form-control"value={data.usuarioById.email} {...register("email", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">CC:</label>
                        <input type="text" className="form-control" value={data.usuarioById.cc} {...register("cc", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Rol:</label>
                        <input type="text" className="form-control" value={data.usuarioById.rol} {...register("rol", { required: true })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Estado:</label>
                        <input type="text" className="form-control" defaultValue={data.usuarioById.estado} {...register("estado", { required: true })} />
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

export default UpdateEstadoUser
