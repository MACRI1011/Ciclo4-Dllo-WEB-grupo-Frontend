import { gql } from '@apollo/client'

const GET_MIS_PROYECTOS = gql`
        query {            
            misProyectos {
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

export default GET_MIS_PROYECTOS;