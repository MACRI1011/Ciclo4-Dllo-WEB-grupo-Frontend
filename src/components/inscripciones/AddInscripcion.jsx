import { useMutation } from '@apollo/client';
import React from 'react';
// import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import SET_INSCRIPCION from '../../apollo/gql/setInscripcion';
import useAuth from '../../hooks/useAuth';

const AddInscripcion = () => {

    const { id } = useParams();

    const auth = useAuth();

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [crearInscripcion] = useMutation(SET_INSCRIPCION);

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);

        const { proyecto_id, usuario_id } = data;

        crearInscripcion({ variables: { proyecto_id: id, usuario_id: auth.user.id } });

        navigate('/proyectos');

    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    // }

    return (
        <>
            <h2 className="mb-4">Agregar Inscripción</h2>
            <hr />
            <div className="card col-md-8 mx-auto">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit(handleCreate)}>

                    <br />
                    <button type="submit" className="btn btn-success">Confirmar solicitud de inscripción</button>
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