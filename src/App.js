import React, { Fragment, useState } from 'react';

import AddUser from './Components/Users/AddUser';
import Userslist from './Components/Users/UsersList';

function App() {
const [UsersList, setUsersList] = useState([]);

const addUserHandler = (uName, uAge) => {
  setUsersList((prevUsersList) => {
    return [
      ...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}
    ];
  });
};

  return (
    <Fragment>
      <AddUser  onAddUser={addUserHandler} />
      <Userslist users={UsersList} />
    </Fragment>
  );
}

export default App;
