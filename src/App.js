import { useState } from "react";
import AddUser from "./components/addUser/AddUser";
import UserView from "./components/userView/UserView";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const updateUsersList = (newUser) => {
    setUsersList([...usersList, newUser]);
  };

  const updateUserReactions = (name, emojiName) => {
    const updatedUsers = usersList.map((el) => {
      if (el.name === name) {
        return {
          ...el,
          reactions: {
            ...el.reactions,
            [emojiName]: el.reactions[emojiName] + 1,
          },
        };
      } else return el;
    });
    setUsersList([...updatedUsers]);
  };

  const renderUsers = usersList.map((el, index) => (
    <UserView
      key={index}
      name={el.name}
      lastName={el.lastName}
      reactions={el.reactions}
      updateUserReactions={updateUserReactions}
    />
  ));
  console.log("users list", usersList);
  return (
    <div className="App">
      <header>
        <h5>Users App</h5>
      </header>
      <AddUser updateUsersList={updateUsersList} />
      {renderUsers}
    </div>
  );
}

export default App;
