import { createContext } from 'react';

const initialState = {
  first: 'Jeongkyu',
  last: 'Lee'
};

export type UserState = typeof initialState;

const context = createContext<UserState>(initialState);

export default context;
