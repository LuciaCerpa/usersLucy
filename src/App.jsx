import UsersForm from "./components/UsersForm";
import UserList from "./components/UserList";
import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const addUser = (user) => {
    axios
      .post(
        "https://users-crud1.herokuapp.com/users/", user)
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => setUserSelected(null);

  const editUser = (userEdited) => {
    axios
      .put(
        `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
        userEdited
      )
      .then(() => getUsers());
  };

  
  return (
    <div className="App">
      
      <UsersForm
        addUser={addUser}
        userSelected={userSelected}
        deselectUser={deselectUser}
        editUser={editUser}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App;
