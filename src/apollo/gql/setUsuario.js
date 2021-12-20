import { gql } from '@apollo/client'

const SET_USUARIO = gql`
        mutation setUsuario($nombre: String, $email: String, $cc: String, $password: String, $rol: String, ) {            
            agregarUsuario(input: {
                nombre: $nombre,
                email: $email,
                cc: $cc,
                password: $password,
                rol: $rol
            }) {
                id
                nombre
                email                 
            }               
        }
    `;

export default SET_USUARIO;