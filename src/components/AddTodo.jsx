import { useState } from 'react';
import { Button, FormControl, Input } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_TODO, ALL_TODOS } from '../apollo/todos';

const AddTodo = () => {
  const [text, setText] = useState('');

  const [addTodo, { error }] = useMutation(ADD_TODO, {
    // refetchQueries: [{ query: ALL_TODOS }],

    update(cache, { data: { newTodo } }) {
      const { todos } = cache.readQuery({ query: ALL_TODOS });

      cache.writeQuery({
        query: ALL_TODOS,
        data: {
          todos: [newTodo, ...todos],
        },
      });
    },
  });

  if (error) {
    return <h1>Error...</h1>;
  }

  const handleAddTodo = () => {
    if (text.trim().length) {
      addTodo({
        variables: {
          title: text,
          completed: false,
          user_id: 123,
        },
      });
      setText('');
    }
  };

  const handleKey = (event) => {
    if (event.key === 'Enter') handleAddTodo();
  };

  return (
    <FormControl display={'flex'} mt={6}>
      <Input value={text} onChange={(e) => setText(e.target.value)} onKeyPress={handleKey} />
      <Button onClick={handleAddTodo}>Add todo</Button>
    </FormControl>
  );
};

export default AddTodo;
