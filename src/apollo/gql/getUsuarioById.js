import { gql } from '@apollo/client'

const GET_USUARIO_BY_ID = gql`
        query getUsuarioById($id: ID!){            
            usuarioById (id: $id) {        
                nombre
                email
                cc
                estado
                rol
                
            }               
        }
    `;

export default GET_USUARIO_BY_ID;