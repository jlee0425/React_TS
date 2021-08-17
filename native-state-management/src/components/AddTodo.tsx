import { Button, Grid, Input } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { useCustomTodoContext } from '../store';

export const AddTodo = () => {
  const { newTodo, setNewTodo, addTodo } = useCustomTodoContext();
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(evt.target.value);
  const handleAddTodo = () => {
    addTodo();
  };

  return (
    <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
      <Input
        placeholder='New Todo'
        value={newTodo}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
    </Grid>
  );
};
