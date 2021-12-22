import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LOGIN_USUARIO from '../../apollo/gql/loginUsuario';
import useAuth from '../../hooks/useAuth';
import './estilos.css';

const Login = () => {

    const auth = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const [loginUsuario, { data, loading, error }] = useLazyQuery(LOGIN_USUARIO);

    useEffect(() => {
        if (data) {
            console.log('data', data);

            auth.setToken(data.login.token);
            auth.setUser({ id: data.login.id, rol: data.login.rol, nombre: data.login.nombre });

            navigate('/proyectos', {
                replace: true
            })
        }
    }, [data, navigate, auth]);

    const handleLogin = (args) => {

        const { email, password } = args;

        loginUsuario({ variables: { email, password } });

    }

    return (
        <React.Fragment>
            <div className='login'>
                <h1 className='titulo'>BuenaMedallOta APP - 2021</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="email"
                            name="email"
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        />
                    </div>

                    {errors.email?.type === "required" && <div className="alert alert-danger mt-2" role="alert">
                        El correo es obligatorio
                    </div>}

                    {errors.email?.type === "pattern" && <div className="alert alert-danger mt-2" role="alert">
                        El correo no tiene el formato adecuado
                    </div>}

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="password"
                            {...register("password", { required: true })}
                        />
                    </div>

                    {errors.password && <div className="alert alert-danger mt-2" role="alert">
                            La contraseña es obligatoria
                        </div>}

                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Ingresar</button>
                        <br /><br />
                        <a href="/registro">
                            <button type="button" className="btn btn-danger">No tienes cuenta? Registrate!!</button>
                        </a>
                    </div>

                </form>

                {error && <div className="alert alert-danger" role="alert">
                        Usuario o contraseña incorrectos
                    </div>}
            </div>
        </React.Fragment>
    )
}

export default Login