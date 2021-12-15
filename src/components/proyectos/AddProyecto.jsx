import { useMutation } from '@apollo/client';
import React from 'react';
// import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SET_PROYECTO from '../../apollo/gql/setProyecto';
import useAuth from '../../hooks/useAuth';

const AddProyecto = () => {

    const auth = useAuth();

    // console.log(auth.user.id);
    // console.log(auth);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [crearProyecto] = useMutation(SET_PROYECTO);

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);

        const { nombre, objetivosG, objetivosE, presupuesto, lider } = data;

        crearProyecto({ variables: { nombre, objetivosG, objetivosE, presupuesto: parseInt(presupuesto, 10), lider: auth.user.id } });

        navigate('/proyectos');

    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    // }

    return (
        <>
            <h2 className="mb-4">Agregar Proyecto</h2>
            <hr />
            <div className="card col-md-8 mx-auto">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit(handleCreate)}>
                    <div className="mb-3">
                        <label htmlFor="producto" className="form-label">Nombre del proyecto:</label>
                        <input type="text" className="form-control" {...register("nombre", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Objetivos generales:</label>
                        <input type="text" className="form-control" {...register("objetivosG", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Objetivos especificos:</label>
                        <input type="text" className="form-control" {...register("objetivosE", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Presupuesto:</label>
                        <input type="number" className="form-control" placeholder="$" {...register("presupuesto", { required: true })} />
                    </div>

                    <br />
                    <button type="submit" className="btn btn-success">Crear Proyecto</button>
                    <br /> <br />

                    <a href="/proyectos">
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </a>

                </form>
            </div>

        </>
    )
}

export default AddProyecto;