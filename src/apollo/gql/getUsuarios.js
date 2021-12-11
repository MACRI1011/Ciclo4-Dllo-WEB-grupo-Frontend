import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
        query {            
            Usuarios {
                id
                nombre
                email
                cc
                rol
                estado
            }               
        }
    `;

export default GET_USUARIOS;