import { gql } from '@apollo/client'

const GET_INSCRIPCIONES = gql`
        query {            
            Inscripciones {
                id
                proyecto_id {
                    nombre
                }
                usuario_id {
                    nombre
                }
                estado
                fechaIngreso
                fechaEgreso
            }            
        }
    `;

export default GET_INSCRIPCIONES;