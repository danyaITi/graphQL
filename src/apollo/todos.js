import { gql } from '@apollo/client';

export const ALL_TODOS = gql`
  query AllTodos {
    todos: allTodos {
      id
      title
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!, $user_id: ID!, $completed: Boolean!) {
    newTodo: createTodo(title: $title, completed: $completed, user_id: $user_id) {
      id
      title
      completed
    }
  }
`;
