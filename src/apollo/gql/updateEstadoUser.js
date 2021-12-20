import { gql } from '@apollo/client'

const UPDATE_ESTADO_USER = gql`
        mutation updateEstadoUser($id: ID!, $estado:String!) {            
            actualizarEstadoUser(
                id: $id,
                estado:$estado
            ) {
                nombre
                estado               
            }               
        }
    `;

export default UPDATE_ESTADO_USER;