import { Button, Grid } from '@chakra-ui/react';
import React from 'react';
import { useCustomTodoContext } from '../store';
import { ColorModeSwitch } from './ColorModeSwitch';

export const TopBar = () => {
  const { loadTodo } = useCustomTodoContext();
  const handleLoadTodos = async () => {
    const response = await fetch(
      'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'
    );
    const data = await response.json();
    loadTodo(data);
  };
  return (
    <Grid pt={2} templateColumns='1fr 1fr' columnGap='3'>
      <ColorModeSwitch /> <Button onClick={handleLoadTodos}>Load</Button>
    </Grid>
  );
};
