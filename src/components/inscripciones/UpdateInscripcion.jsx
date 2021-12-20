import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import UPDATE_INSCRIPCION from '../../apollo/gql/updateInscripciones';
import GET_INSCRIPCION_BY_ID from '../../apollo/gql/getInscripcionById';
import useAuth from '../../hooks/useAuth';

const UpdateInscripcion = () => {
   

    const {id} = useParams();
    const navigate = useNavigate();
    const {loading, data, error} =useQuery(GET_INSCRIPCION_BY_ID, {
        variables: {
            id
        }
    });
    const [updateInscripcion] = useMutation(UPDATE_INSCRIPCION);
    const {register, handleSubmit} = useForm();
    const handleUpdate = (args) => {
        console.log('actualizar');
        console.log(data);

        const {proyecto_id, usuario_id, estado, fechaIngreso } = args;

        updateInscripcion({ variables: {proyecto_id, usuario_id, estado, fechaIngreso} });

        navigate('/inscripciones');
    };

    return (
        <>
        {error && <h1>error</h1>}
        {loading && <h1>datos</h1>}
        {data && <div>
            <h2 className="mb-4">Editar Inscripcion</h2>
            <hr />
            <div className="card col-md-8 mx-auto">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <div className="mb-3">
                        <label htmlFor="producto" className="form-label">Proyecto:</label>
                        <input type="text" className="form-control" defaultValue={data.inscripcionById.proyecto_id} {...register("proyecto_id", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Usuario:</label>
                        <input type="text" className="form-control"defaultValue={data.inscripcionById.usuarios_id} {...register("usuario_id", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Estado:</label>
                        <input type="text" className="form-control" defaultValue={data.inscripcionById.estado} {...register("estado", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Fecha Ingreso:</label>
                        <input type="text" className="form-control" value={data.inscripcionById.fechaIngreso} {...register("fechaIngreso", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Fecha Egreso:</label>
                        <input type="text" className="form-control" value={data.inscripcionById.fechaEgreso} {...register("fechaEgreso", { required: true })} />
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

export default UpdateInscripcion
