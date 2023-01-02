import { gql } from '@apollo/client'

export const GET_ALL_USERS_GQL = gql`
  query {
    users {
      id
      roles
      firstName
      lastName
      email
      password
      phone
      address
      birthDate
      profesion
      picture {
        url
      }
      ministries
      orders
      isDeleted
      createdAt
      updatedAt
    }
  }
`