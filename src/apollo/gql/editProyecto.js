import { gql } from '@apollo/client'

const EDIT_PROYECTO = gql`
        mutation editProyecto($id: ID!, $nombre: String, $objetivosG: [String], $objetivosE: [String], $presupuesto: Int, $estado: Boolean, $fase: String) {            
            actualizarInfoProyecto(
                id: $id,
                nombre: $nombre,
                objetivosG: $objetivosG,
                objetivosE: $objetivosE,
                presupuesto: $presupuesto,
                estado: $estado,
                fase: $fase
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