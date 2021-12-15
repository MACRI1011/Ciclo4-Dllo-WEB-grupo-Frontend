import { gql } from '@apollo/client'

const GET_PROYECTOS = gql`
        query {            
            proyectos {
                id
                nombre
                objetivosG
                objetivosE
                presupuesto
                fechaInicio
                fechaFin
                lider {
                    cc
                    nombre
                }
                estado
                fase 
            }               
        }
    `;

export default GET_PROYECTOS;