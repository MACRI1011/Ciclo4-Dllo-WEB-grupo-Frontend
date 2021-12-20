import { useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SET_USUARIO from '../../apollo/gql/setUsuario';
import useAuth from '../../hooks/useAuth';

const Registro = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [crearUsuario] = useMutation(SET_USUARIO);

    const handleCreate = (args) => {
        console.log('crear');
        console.log(args);

        const { nombre, email, cc, password, rol } = args;

        crearUsuario({ variables: { nombre, email, cc, password, rol } });

        navigate('/login');

    };

    return (
        <div>
            <div>
                <h1>Registro</h1>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="well well-sm">
                            <form onSubmit={handleSubmit(handleCreate)}>
                                <fieldset>
                                    <legend class="text-center header">Ingrese sus datos</legend>

                                    <div className="mb-3">
                                        <label htmlFor="producto" className="form-label">Nombre del usuario:</label>
                                        <input type="text" className="form-control" {...register("nombre", { required: true })} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="valor" className="form-label">Cédula de ciudadanía:</label>
                                        <input type="number" className="form-control" {...register("cc", { required: true })} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="valor" className="form-label">Email:</label>
                                        <input type="text" className="form-control" {...register("email", { required: true })} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="valor" className="form-label">Contraseña:</label>
                                        <input type="password" className="form-control" {...register("password", { required: true })} />
                                    </div>

                                    <div className="mb-3">
                                        <input {...register("rol", { required: true })} type="radio" id="true" value="Administrador" />
                                        <label for="true">Administrador</label><br></br>
                                        <input {...register("rol", { required: true })} type="radio" id="false" value="Lider" />
                                        <label for="false">Lider</label><br></br>
                                        <input {...register("rol", { required: true })} type="radio" id="false" value="Estudiante" />
                                        <label for="false">Estudiante</label><br></br>
                                    </div>

                                    <br />
                                    <button type="submit" className="btn btn-success">Confirmar registro</button>
                                    <br /> <br />

                                    <a href="/login">
                                        <button type="button" className="btn btn-danger">Cancelar</button>
                                    </a>

                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Registro