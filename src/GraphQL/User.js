import {gql} from "apollo-boost";

export const ALL_USERS = gql`
query FetchUsers {
  user {
    id
    firstName
    lastName, 
    username,
    created
  }
}`;