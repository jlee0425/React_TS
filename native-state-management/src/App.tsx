import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { TopBar } from './components/TopBar';
import { CustomTodoProvider } from './store';

export function App () {
  return (
    <ChakraProvider theme={theme}>
      <CustomTodoProvider>
        <Box maxWidth='8xl' margin='auto' p={5}>
          <TopBar />
          <TodoList />
          <AddTodo />
        </Box>
      </CustomTodoProvider>
    </ChakraProvider>
  );
}
