import { Checkbox, Text, CloseButton, HStack } from '@chakra-ui/react';

const TodoItem = ({ id, title }) => {
  return (
    <HStack spacing={3}>
      <Checkbox />
      <Text>{title}</Text>
      <CloseButton />
    </HStack>
  );
};

export default TodoItem;
