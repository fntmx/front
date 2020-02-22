import { gql } from 'apollo-boost';

export const PROJECTS = gql`
  query FetchProjects {
    projects {
      id
      title
      description
      github
      tags
      created
    }
  }
`;
