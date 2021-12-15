import { gql } from '@apollo/client'

const GET_INSCRIPCIONES = gql`
        query {            
            Inscripciones {
                id
                proyecto_id
                usuario_id
                estado
                fechaIngreso
                fechaEgreso
            }            
        }
    `;

export default GET_INSCRIPCIONES;