import { useMutation } from '@apollo/client';
import { Checkbox, Text, CloseButton, HStack } from '@chakra-ui/react';
import { UPDATE_TODO } from '../apollo/todos';

const TodoItem = ({ id, title, completed }) => {
  const [toggleTodo, { error }] = useMutation(UPDATE_TODO);

  if (error) {
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
      <CloseButton />
    </HStack>
  );
};

export default TodoItem;
