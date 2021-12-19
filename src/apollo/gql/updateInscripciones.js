import { gql } from '@apollo/client';

const UPDATE_INSCRIPCION = gql`
mutation updateInscripcion($id: ID!, $proyecto_id: String, $usuario_id: String,$estado: String,$fechaIngreso: String,$fechaEgreso: String ){
    actualizarInscripcion(
        id:$id
        proyecto_id:$proyecto_id
        usuario_id:$usuario_id
        estado:$estado
        fechaIngreso:$fechaIngreso
        fechaEgreso:$fechaEgreso
        
    ){  
        id
        proyecto_id
        usuario_id
        estado
        fechaIngreso
    }
}

`
export default UPDATE_INSCRIPCION;