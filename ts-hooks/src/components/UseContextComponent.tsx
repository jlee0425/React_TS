import React, { ReactElement, useState } from 'react';
import { useContext } from 'react';
import UserContext, { UserState } from '../store';

function ConsumerComponent () {
  const user = useContext(UserContext); // TS infers the type

  return (
    <div>
      <div>
        First: <strong>{user.first}</strong>
      </div>
      <div>
        Last: <strong>{user.last}</strong>
      </div>
    </div>
  );
}

function UseContextComponent (): ReactElement {
  const [user, setUser] = useState<UserState>({
    first: 'Dolseoi',
    last: 'Kim'
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={() => setUser({ first: 'Cheolsu', last: 'Lee' })}>
        Change Context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
