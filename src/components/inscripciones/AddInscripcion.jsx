import { useMutation } from '@apollo/client';
import React from 'react';
// import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SET_INSCRIPCION from '../../apollo/gql/setInscripcion';
import useAuth from '../../hooks/useAuth';

const AddInscripcion = () => {

    const auth = useAuth();

    // console.log(auth.user.id);
    // console.log(auth);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [crearInscripcion] = useMutation(SET_INSCRIPCION);

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);

        const { proyecto_id, usuario_id, estado, fechaIngreso } = data;

        crearInscripcion({ variables: { proyecto_id, usuario_id:auth.user.id, estado, fechaIngreso} });

        navigate('/inscripciones');

    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    // }

    return (
        <>
            <h2 className="mb-4">Agregar Inscripcion</h2>
            <hr />
            <div className="card col-md-8 mx-auto">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit(handleCreate)}>
                    <div className="mb-3">
                        <label htmlFor="producto" className="form-label">Nombre del proyecto:</label>
                        <input type="text" className="form-control" {...register("proyecto_id", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Nombre del proyecto:</label>
                        <input type="text" className="form-control" {...register("usuario_id", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Estado:</label>
                        <input type="text" className="form-control" {...register("estado", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Fecha de Ingreso:</label>
                        <input type="text" className="form-control" {...register("fechaIngreso", { required: true })} />
                    </div>

                    <br />
                    <button type="submit" className="btn btn-success">Crear Inscripcion</button>
                    <br /> <br />

                    <a href="/inscripciones">
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </a>

                </form>
            </div>

        </>
    )
}

export default AddInscripcion;