import { gql } from "@apollo/client";

const GET_AVANCES = gql`
  query getAvances($idProyecto: ID!) {
    listaAvances(idProyecto: $idProyecto) {
      id
      fechaAvance
      avanceEstudiante
      usuario_id{
          nombre
      }
      observaciones {
        observacion
        fechaObservacion
      }
    }
  }
`;

export default GET_AVANCES;
