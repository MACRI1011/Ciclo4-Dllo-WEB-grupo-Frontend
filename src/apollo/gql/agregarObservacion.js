import { gql } from "@apollo/client";

const AGREGAR_OBSERVACION = gql`
  mutation agregarObservacion($idAvance: ID!, $observacion: String!, $idProyecto: ID!) {
    agregarObservacion(idAvance: $idAvance, observacion: $observacion, idProyecto: $idProyecto) {
      id
      fechaAvance
      avanceEstudiante
      observaciones {
        observacion
        fechaObservacion
      }
    }
  }
`;

export default AGREGAR_OBSERVACION;