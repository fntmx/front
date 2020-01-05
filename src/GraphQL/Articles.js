import {gql} from "apollo-boost";

export const COUNT_ARTICLES = gql`query {
    count {
        articles
    }
}`;

export const ALL_ARTICLES = gql`
query FetchArticles($offset: Int = 0, $limit: Int = 10, $withData: Boolean = false) {
  article(offset: $offset, limit: $limit, withData: $withData) {
    id
    title
    tags
    description
    created
    data @include(if: $withData) 
   
    author { 
        id
        username
    }
  }
}`;

export const SINGLE_ARTICLE = gql`
query FetchArticle($id: Int!) {
  article(id: $id) {
    id
    title
    tags
    description
    data
    created
    
    author { 
        id
        username
    }
  }
}`;

export const NEW_ARTICLE = gql`
mutation NewArticle($id: Int, $title: String!, $description: String!, $data: String!, $tags: [String]!, $author: Int) {
    article(id: $id, title: $title, description: $description, data: $data, tags: $tags, author: $author) {
       id
    }
}`;