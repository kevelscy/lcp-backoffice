import { gql } from '@apollo/client'

export const SIGN_IN_GQL = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      phone
      roles {
        id
      }
      picture
      address
      birthDate
      profesion
      isDeleted
      password
      accessToken
      refreshToken
    }
  }
`