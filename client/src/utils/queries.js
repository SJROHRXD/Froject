import { gql } from '@apollo/client';

export const QUERY_APPLICANTS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getApplicants {
    applicants {
      _id
      name
      email
      posting {
        name
      }
    }
  }
`;
