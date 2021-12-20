import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import UPDATE_INSCRIPCION from '../../apollo/gql/updateInscripciones';
import GET_INSCRIPCION_BY_ID from '../../apollo/gql/getInscripcionById';
import useAuth from '../../hooks/useAuth';

const UpdateInscripcion = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, data, error } = useQuery(GET_INSCRIPCION_BY_ID, {
        variables: {
            id
        }
    });
    const [updateInscripcion] = useMutation(UPDATE_INSCRIPCION);

    const { register, handleSubmit } = useForm();

    const handleUpdate = (args) => {
        console.log('actualizar');
        console.log(data);

        const { proyecto_id, usuario_id, estado, fechaIngreso } = args;

        updateInscripcion({ variables: { id, estado } });

        navigate('/inscripciones');
    };

    return (
        <>
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <div>
                <h2 className="mb-4">Editar Inscripción</h2>
                <hr />
                <div className="card col-md-8 mx-auto">
                    <div className="card-body"></div>
                    <form onSubmit={handleSubmit(handleUpdate)}>

                        <div className="mb-3">
                            <input {...register("estado", { required: true })} type="radio" id="true" value="Aceptada" />
                            <label for="true">Aceptada</label><br></br>
                            <input {...register("estado", { required: true })} type="radio" id="false" value="Rechazada" />
                            <label for="false">Rechazada</label><br></br>
                        </div>

                        <br />
                        <button type="submit" className="btn btn-success">Confirmar cambios</button>
                        <br /> <br />

                        <a href="/inscripciones">
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </a>

                    </form>
                </div>
            </div>}
        </>
    )
}

export default UpdateInscripcion