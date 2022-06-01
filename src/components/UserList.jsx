import React from "react";


const UserList = ({ users, deleteUser, selectUser }) => {
  return (
    <ul className="usersList">
      {users.map((user) => (
        <li className="userCard"key={user.id}>
          <div>
          <h3>{user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
          <p><i className="uil uil-gift"></i>{user.birthday}
          </p>
          </div>
          <div className="buttons">
            <button onClick={() => deleteUser(user.id)}><i className="uil-trash"></i></button>

            <button onClick={() => selectUser(user)}><i className="uil-pen"></i></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;