import { gql } from '@apollo/client';

const UPDATE_USER = gql`
mutation updateUsuario($id: ID!, $nombre: String, $cc: String, $password: String){
    actualizarUsuario(
        id: $id
        nombre: $nombre
        cc: $cc
        password: $password
        
    ){  
        id
        nombre
        email
        cc
    }
}

`
export default UPDATE_USER;