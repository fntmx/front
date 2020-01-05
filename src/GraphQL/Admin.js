import {gql} from "apollo-boost";

export const ADMIN = {
    MUTATION: {
        LOGIN: () => {
            return gql`
  mutation LoginUser($username: String!, $password: String!){
    login(username: $username, password: $password) {
        token
    }
  }
`;
        }
    }
};