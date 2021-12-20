import { gql } from '@apollo/client'

const GET_PROYECTOS_BY_ID = gql`
        query getProyecto($id: ID!){            
            proyectoById (id: $id) {        
                nombre
                objetivosG
                objetivosE
                presupuesto                            
                estado
                fase
            }               
        }
    `;

export default GET_PROYECTOS_BY_ID;