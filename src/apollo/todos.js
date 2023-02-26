import { gql } from "@apollo/client";

export const ALL_TODOS = gql`
  query AllTodos {
    todos: allTodos {
      id
      title
      completed
    }
  }
`;
