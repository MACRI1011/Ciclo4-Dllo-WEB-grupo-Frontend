import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LOGIN_USUARIO from '../../apollo/gql/loginUsuario';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const auth = useAuth();

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const [loginUsuario, { data, loading, error }] = useLazyQuery(LOGIN_USUARIO);

    useEffect(() => {
        if (data) {
            console.log('data', data);

            auth.setToken(data.login.token);
            auth.setUser({ id: data.login.id, rol: data.login.rol });

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
            <form onSubmit={handleSubmit(handleLogin)}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">email</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="email"
                        name="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                </div>
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
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                </div>
                <button type="submit" class="btn btn-primary">Ingresar</button>
                                
                <a href="/registrarse">
                        <button type="button" className="btn btn-danger">No tienes cuenta? Registrate!!</button>
                    </a>

            </form>
        </React.Fragment>
    )
}

export default Login