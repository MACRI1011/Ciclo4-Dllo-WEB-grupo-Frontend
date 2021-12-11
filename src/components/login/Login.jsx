import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();
        // agregar una nueva ruta al stack de navegacion
        // navigate('/usuarios')

        // reemplazar el historial para no poder regresar a la ruta previa
        navigate('/proyectos', {
            replace: true
        })
        console.log('login');
    }

    return (
        <React.Fragment>
            <form onSubmit={handleLogin}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                 </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Login