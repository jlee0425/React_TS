import { Button, Checkbox, Flex, Heading, Input } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { Todo, useCustomTodoContext } from '../store';

const TodoListItems = () => {
  const { todos, updateTodo, toggleTodo, removeTodo } = useCustomTodoContext();
  const toggleCheckbox = (id: number) => () => toggleTodo(id);
  const handleUpdate = (id: number) => (e: ChangeEvent<HTMLInputElement>) =>
    updateTodo(id, e.target.value);
  const handleDelete = (id: number) => () => removeTodo(id);

  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={toggleCheckbox(todo.id)} checked={todo.done} />
          <Input mx={2} value={todo.text} onChange={handleUpdate(todo.id)} />
          <Button onClick={handleDelete(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
};

export const TodoList = () => {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
};
