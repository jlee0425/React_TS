import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map(todo => ({ ...todo, text: todo.id === id ? text : todo.text }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map(todo => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter(todo => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text: text,
    done: false
  }
];

// useState
export const useTodos = (initial: Todo[]) => useState<Todo[]>(initial);
export type UseTodosType = ReturnType<typeof useTodos>;
export type TodosType = UseTodosType[0];
export type SetTodosType = UseTodosType[1];

// useContext
const TodoContext = createContext<UseTodosType | null>(null);
export const useTodosContext = () => useContext(TodoContext)!; // coerce not null
export const TodosProvider = ({ children }: { children: ReactNode }) => (
  <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
);

// custom hook
export const useCustomTodos = (initial: Todo[] = []) => {
  const [todos, setTodos] = useState<Todo[]>(initial);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => console.log(todos), [todos]);
  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo: useCallback(() => {
      setTodos(list => addTodo(list, newTodo));
      setNewTodo('');
    }, [newTodo]),
    updateTodo (id: number, text: string) {
      setTodos(list => updateTodo(list, id, text));
    },
    toggleTodo (id: number) {
      setTodos(list => toggleTodo(list, id));
    },
    removeTodo (id: number) {
      setTodos(list => removeTodo(list, id));
    },
    loadTodo (todos: Todo[]) {
      setTodos(todos);
    }
  };
};

const CustomTodoContext = createContext<ReturnType<
  typeof useCustomTodos
> | null>(null);

export const useCustomTodoContext = () => useContext(CustomTodoContext)!;
export const CustomTodoProvider = ({ children }: { children: ReactNode }) => (
  <CustomTodoContext.Provider value={useCustomTodos([])}>
    {children}
  </CustomTodoContext.Provider>
);
