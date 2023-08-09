import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUsersList } from "../../redux/usersSlice";

const defaultValues = {
  name: "",
  lastName: "",
  reactions: {
    like: 0,
    dislike: 0,
    heart: 0,
  },
};

const AddUser = (props) => {
  const [userData, setUserData] = useState(defaultValues);
  const dispatch = useDispatch();

  const isBtnDisabled = !userData.name || !userData.lastName;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // props.updateUsersList(userData);
    dispatch(updateUsersList(userData));
    setUserData(defaultValues);
  };

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="name"
        type="text"
        name="name"
        onChange={onChangeHandler}
        value={userData.name}
        required
      />
      <input
        placeholder="lasName"
        type="text"
        name="lastName"
        onChange={onChangeHandler}
        value={userData.lastName}
        required
      />
      <button type="submit" disabled={isBtnDisabled}>
        Add User
      </button>
    </form>
  );
};

export default AddUser;
