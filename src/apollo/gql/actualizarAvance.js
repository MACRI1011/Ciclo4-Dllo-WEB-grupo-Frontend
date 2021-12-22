import { gql } from "@apollo/client";

const ACTUALIZAR_AVANCE = gql`
  mutation actualizarAvance($idAvance: ID!, $avance: String!) {
    actualizarAvance(idAvance: $idAvance, avance: $avance) {
      avanceEstudiante
    }
  }
`;

export default ACTUALIZAR_AVANCE;
