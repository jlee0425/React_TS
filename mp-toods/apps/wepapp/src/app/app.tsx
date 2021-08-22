import { useTodos } from '@mp-toods/data-access';
import { useCallback, useRef } from 'react';
import styles from './app.module.css';

const API_URL = 'http://localhost:3333/api';
export function App () {
  const { todos, addTodo, toggleTodo } = useTodos();

  const textInputRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(async () => {
    if (textInputRef.current) {
      await addTodo(textInputRef.current.value);
      textInputRef.current.value = '';
    }
  }, [addTodo]);

  return (
    <div className={styles.app}>
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
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
