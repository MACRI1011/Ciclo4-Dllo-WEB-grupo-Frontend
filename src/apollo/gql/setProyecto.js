import { gql } from '@apollo/client'

const SET_PROYECTO = gql`
        mutation setProyecto($nombre: String, $objetivosG: [String], $objetivosE: [String], $presupuesto: Int, $lider: ID) {            
            agregarProyecto(input: {
                nombre: $nombre,
                objetivosG: $objetivosG,
                objetivosE: $objetivosE,
                presupuesto: $presupuesto,
                lider: $lider
            }) {
                id
                nombre
                presupuesto                 
            }               
        }
    `;

export default SET_PROYECTO;