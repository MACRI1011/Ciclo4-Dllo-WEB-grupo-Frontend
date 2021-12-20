import { gql } from '@apollo/client'

const SET_INSCRIPCION = gql`
        mutation setInscripcion($proyecto_id: ID, $usuario_id: ID) {            
            agregarInscripcion(input: {
                proyecto_id: $proyecto_id,
                usuario_id: $usuario_id               
            }) {
                id
                estado              
            }               
        }
    `;

export default SET_INSCRIPCION;