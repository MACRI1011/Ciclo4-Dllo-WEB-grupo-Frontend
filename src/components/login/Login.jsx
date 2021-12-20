import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LOGIN_USUARIO from '../../apollo/gql/loginUsuario';
import useAuth from '../../hooks/useAuth';
import './estilos.css';

const Login = () => {

    const auth = useAuth();

    const { register, handleSubmit } = useForm();

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
            <form onSubmit={handleSubmit(handleLogin)}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        name="password"
                        {...register("password", { required: true })}
                    />
                    </div>
                <div class="mb-3 form-check">
                     
                    <label><input type="checkbox"/> Recuerdame</label>
                </div>
                <button type="submit" class="btn btn-success" id="boton1">Ingresar</button>{' '}
                                
                <a href="/registro">
                        <button type="button" className="btn btn-secondary">No tienes cuenta? Registrate!!</button>
                    </a>
                    

            </form>
            </div>
        </React.Fragment>
    )
}

export default Login