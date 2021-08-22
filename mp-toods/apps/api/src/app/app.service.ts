import { Todo } from '@mp-toods/shared-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private todos: Todo[] = [];

  getData (): Todo[] {
    return this.todos;
  }

  add (text: string): void {
    this.todos.push({
      id: this.todos.length,
      text,
      done: false
    });
  }

  setDone (id: number, done: boolean): void {
    this.todos = this.todos.map(t => ({
      ...t,
      done: t.id === id ? done : t.done
    }));
  }
}
