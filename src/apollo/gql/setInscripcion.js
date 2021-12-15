import { gql } from '@apollo/client'

const SET_INSCRIPCION = gql`
        mutation setInscripcion($proyecto_id: [String], $usuario_id: [String], $estado:String , $fechaIngreso: String) {            
            agregarInscrippcion(input: {
                proyecto_id: $proyecto_id,
                usuario_id: $usuario_id,
                estado: $estado,
                fechaIngreso: $fechaIngreso
               
            }) {
                id
                proyecto_id
                usuario_id 
                estado              
            }               
        }
    `;

export default SET_INSCRIPCION;