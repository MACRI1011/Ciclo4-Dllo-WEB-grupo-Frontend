import { gql } from "@apollo/client";

const AGREGAR_AVANCE = gql`
  mutation agregarAvance($idProyecto: ID!, $avance: String!) {
    agregarAvance(idProyecto: $idProyecto, avance: $avance) {
      id
      nombre
      avances {
        avanceEstudiante
        id
      }
    }
  }
`;

export default AGREGAR_AVANCE;
