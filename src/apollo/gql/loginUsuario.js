import { gql } from '@apollo/client'

const LOGIN_USUARIO = gql`
        query signIn($email: String!, $password: String!){            
            login(email: $email, password: $password) {
                id
                nombre
                token                
                rol
            }     
        }
    `;

export default LOGIN_USUARIO;