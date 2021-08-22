import { Todo } from '@mp-toods/shared-types';
import axios from 'axios';
import { useCallback, useState } from 'react';

const API_URL = 'http://localhost:3333/api';

export function useToods () {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = useCallback(async () => {
    const response = await axios.get<Todo[]>(API_URL);
    setTodos(response.data);
  }, []);

  const addTodo = useCallback(
    async (text: string) => {
      await axios.post(API_URL, {
        text
      });
      getTodos();
    },
    [getTodos]
  );

  const toggleTodo = useCallback(
    async (id: number) => {
      await axios.post(`${API_URL}/setDone`, {
        id: id,
        done: !todos.find(todo => todo.id === id)?.done
      });
      getTodos();
    },
    [todos, getTodos]
  );

  return {
    todos,
    getTodos,
    addTodo,
    toggleTodo
  };
}
