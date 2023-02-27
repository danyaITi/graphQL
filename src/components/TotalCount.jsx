import { useQuery } from '@apollo/client';
import { Flex } from '@chakra-ui/react';
import { ALL_TODOS } from '../apollo/todos';

const TotalCount = () => {
  const { data } = useQuery(ALL_TODOS);

  return (
    <Flex justifyContent={'center'} borderTop={'2px'} mt="5">
      {data && data.todos.length}
    </Flex>
  );
};

export default TotalCount;
