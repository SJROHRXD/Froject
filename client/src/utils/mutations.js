import { gql } from "@apollo/client";

export const ADD_FEEDBACK = gql`
  mutation addFeedback($feedbackText: String!, $email: String!) {
    addFeedback(feedback: $feedbackText, email: $email) {
      _id
      name
      email
      posting {
        name
      }
      schedule {
        date
      }
      skills
      feedback
    }
  }
`;

export const LOGIN_EMPLOYEE = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
      employee {
        _id
        name
      }
    }
  }
`;
