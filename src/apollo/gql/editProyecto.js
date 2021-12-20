import { gql } from '@apollo/client'

const EDIT_PROYECTO = gql`
        mutation editProyecto($id: ID!, $nombre: String, $objetivosG: [String], $objetivosE: [String], $presupuesto: Int) {            
            actualizarInfoProyecto(
                id: $id,
                nombre: $nombre,
                objetivosG: $objetivosG,
                objetivosE: $objetivosE,
                presupuesto: $presupuesto
            ) {
                id
                nombre
                objetivosG
                objetivosE
                presupuesto                 
            }               
        }
    `;

export default EDIT_PROYECTO;