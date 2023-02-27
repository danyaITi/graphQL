import { Spinner, VStack } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import TodoItem from './TodoItem';
import TotalCount from './TotalCount';
import { ALL_TODOS } from '../apollo/todos';

const TodoList = () => {
  const { data, loading, error } = useQuery(ALL_TODOS);

  if (error) return <h1>{error}</h1>;

  if (loading) return <Spinner />;

  return (
    <>
      <VStack spacing={2} mt={4}>
        {data.todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </VStack>
      <TotalCount />
    </>
  );
};

export default TodoList;
