import { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import { Todo } from '@mp-toods/shared-types';
import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import axios from 'axios';

export function App () {
  const [todos, setTodos] = useState<Todo[]>([]);
  const getTodos = useCallback(async () => {
    const response = await axios.get<Todo[]>('http://localhost:3333/api');
    setTodos(response.data);
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return <div className={styles.app}>{JSON.stringify(todos)}</div>;
}

export default App;
