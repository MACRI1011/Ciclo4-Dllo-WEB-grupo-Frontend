import { gql } from '@apollo/client';

const UPDATE_INSCRIPCION = gql`
mutation updateInscripcion($id: ID!, $estado: String! ){
    actualizarEstadoInscripcion(
        id:$id
        estado:$estado
    ){  
        id
        estado
        fechaEgreso
        fechaIngreso
    }
}

`
export default UPDATE_INSCRIPCION;