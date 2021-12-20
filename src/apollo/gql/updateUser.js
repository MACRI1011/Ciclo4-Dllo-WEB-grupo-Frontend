import { gql } from '@apollo/client';

const UPDATE_USER = gql`
mutation updateUsuario($id: ID!, $nombre: String,$email: String,$cc: String,$rol: String ){
    actualizarUsuario(
        id:$id
        nombre:$nombre
        email:$email
        cc:$cc
        rol:$rol
        
    ){  
        id
        nombre
        email
        cc
    }
}

`
export default UPDATE_USER;