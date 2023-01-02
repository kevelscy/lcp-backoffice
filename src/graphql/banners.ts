import { gql } from '@apollo/client'

export const GET_ALL_BANNERS_GQL = gql`
  query {
    banners {
      id
      title
      image
      createdAt
      updatedAt
    }
  }
`