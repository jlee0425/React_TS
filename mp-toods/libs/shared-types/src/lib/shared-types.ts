export function sharedTypes (): string {
  return 'shared-types';
}

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
