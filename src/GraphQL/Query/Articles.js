import { gql } from 'apollo-boost';

export const ARTICLES = gql`
  query FetchArticles($keywords: [String]) {
    articles(keywords: $keywords) {
      id
      title
      description
      tags
      created
      author {
        id
        firstName
        lastName
        created
      }
    }
  }
`;

export const ARTICLE = gql`
  query Article($id: Int!) {
    article(id: $id) {
      id
      title
      description
      data
      tags
      created
      author {
        id
        firstName
        lastName
        created
      }
    }
  }
`;
