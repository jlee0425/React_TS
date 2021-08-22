import {
  useEffect,
  useState,
  useCallback,
  useRef,
  SyntheticEvent
} from 'react';
import styles from './app.module.css';
import { Todo } from '@mp-toods/shared-types';
import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import axios from 'axios';

const API_URL = 'http://localhost:3333/api';
export function App () {
  const [todos, setTodos] = useState<Todo[]>([]);
  const getTodos = useCallback(async () => {
    const response = await axios.get<Todo[]>(API_URL);
    setTodos(response.data);
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const textInputRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(async () => {
    if (textInputRef.current) {
      await axios.post(API_URL, {
        text: textInputRef.current.value
      });
      textInputRef.current.value = '';
      getTodos();
    }
  }, [getTodos]);

  const onToggle = useCallback(
    async (id: number) => {
      await axios.post(`${API_URL}/setDone`, {
        id: id,
        done: !todos.find(todo => todo.id === id)?.done
      });
      getTodos();
    },
    [todos, getTodos]
  );

  return (
    <div className={styles.app}>
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />
            {todo.text}
          </div>
        ))}
      </div>
      <div>
        <input ref={textInputRef} />
      </div>
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
}

export default App;
