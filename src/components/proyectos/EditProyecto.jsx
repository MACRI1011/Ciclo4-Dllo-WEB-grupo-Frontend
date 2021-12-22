import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import EDIT_PROYECTO from '../../apollo/gql/editProyecto';
import GET_PROYECTOS_BY_ID from '../../apollo/gql/getProyectoById';
import useAuth from '../../hooks/useAuth';

const EditProyecto = () => {

    const { id } = useParams();

    const auth = useAuth();

    const navigate = useNavigate();

    const { loading, data, error } = useQuery(GET_PROYECTOS_BY_ID, {
        variables: {
            id
        }
    });

    const { register, handleSubmit } = useForm();

    const [actualizarProyecto] = useMutation(EDIT_PROYECTO);

    const handleUpdate = (args) => {
        console.log('crear');
        console.log(data);

        const parseBoolean = (value) => {
            if (value && typeof value === "string") {
                if (value.toLowerCase() === "true") return true;
                if (value.toLowerCase() === "false") return false;
            }
            return value;
        };

        const { nombre, objetivosG, objetivosE, presupuesto, estado, fase } = args;

        actualizarProyecto({ variables: { id, nombre, objetivosG, objetivosE, presupuesto: parseInt(presupuesto, 10), estado: parseBoolean(estado), fase } });

        navigate('/proyectos');
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
                            <label htmlFor="producto" className="form-label">Nombre del proyecto:</label>
                            <input type="text" disabled={auth.user.rol === "Lider" ? "" : "disabled"} className="form-control" defaultValue={data.proyectoById.nombre} {...register("nombre", { required: false })} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Objetivos generales:</label>
                            <input type="text" disabled={auth.user.rol === "Lider" ? "" : "disabled"} className="form-control" defaultValue={data.proyectoById.objetivosG} {...register("objetivosG", { required: false })} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Objetivos especificos:</label>
                            <input type="text" disabled={auth.user.rol === "Lider" ? "" : "disabled"} className="form-control" defaultValue={data.proyectoById.objetivosE} {...register("objetivosE", { required: false })} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">Presupuesto:</label>
                            <input type="number" disabled={auth.user.rol === "Lider" ? "" : "disabled"} className="form-control" placeholder="$" defaultValue={data.proyectoById.presupuesto} {...register("presupuesto", { required: false })} />
                        </div>

                        <div className="mb-3">
                            <input disabled={auth.user.rol === "Administrador" ? "" : "disabled"} {...register("estado", { required: false })} type="radio" id="true" value="true" />
                            <label for="true">Activo</label><br></br>
                            <input disabled={auth.user.rol === "Administrador" ? "" : "disabled"} {...register("estado", { required: false })} type="radio" id="false" value="false" />
                            <label for="false">Inactivo</label><br></br>
                        </div>

                        <div>
                            <select {...register("fase", { required: false })}>
                                <option disabled selected value>Selecciona una opcion</option>
                                <option value="En desarrollo">En desarrollo</option>
                                <option value="Terminado">Terminado</option>
                            </select>
                        </div>

                        <br />
                        <button type="submit" className="btn btn-success">Actualizar Proyecto</button>
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

export default EditProyecto;