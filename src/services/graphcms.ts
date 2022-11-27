import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

export const hygraph = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/clawcpwat3nj401t1a1u01bum/master',
);

export const QUERY = gql`
  {
    projects {
      id
      name
      slug
      description
      sourceCode
      image {
        url
      }
    }
  }
`