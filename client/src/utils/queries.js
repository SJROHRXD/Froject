import { gql } from "@apollo/client";

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
      schedule {
        date
      }
      feedback
    }
  }
`;

export const QUERY_APPLICANTS_BY_EMAIL = gql`
  query getApplicantByEmail($email: String!) {
    applicantByEmail(email: $email) {
      _id
      name
      email
      posting {
        name
      }
      schedule {
        date
      }
      feedback
    }
  }
`;
