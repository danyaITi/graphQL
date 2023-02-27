import { useMutation } from '@apollo/client';
import { Checkbox, Text, CloseButton, HStack } from '@chakra-ui/react';
import { REMOVE_TODO, UPDATE_TODO } from '../apollo/todos';

const TodoItem = ({ id, title, completed }) => {
  const [toggleTodo, { error }] = useMutation(UPDATE_TODO);
  const [removeTodo, { error: removeError }] = useMutation(REMOVE_TODO, {
    update(cache, { data: { removeTodo } }) {
      cache.modify({
        fields: {
          allTodos(currentTodos = []) {
            return currentTodos.filter((todo) => todo.__ref !== `Todo:${removeTodo.id}`);
          },
        },
      });
    },
  });

  console.log('render');

  if (error || removeError) {
    return <h2>Error...</h2>;
  }

  return (
    <HStack spacing={3}>
      <Checkbox
        isChecked={completed}
        onChange={() =>
          toggleTodo({
            variables: {
              id: id,
              completed: !completed,
            },
          })
        }
      />
      <Text>{title}</Text>
      <CloseButton onClick={() => removeTodo({ variables: { id: id } })} />
    </HStack>
  );
};

export default TodoItem;
