import { useState } from "react";
import AddUser from "./components/addUser/AddUser";
import UserView from "./components/userView/UserView";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const { usersList } = useSelector((state) => state.users);

  const renderUsers = usersList.map((el, index) => (
    <UserView
      key={index}
      name={el.name}
      lastName={el.lastName}
      reactions={el.reactions}
    />
  ));
  return (
    <div className="App">
      <header>
        <h5>Users App</h5>
      </header>
      <AddUser />
      {renderUsers}
    </div>
  );
}

export default App;
