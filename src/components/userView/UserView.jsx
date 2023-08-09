import React from "react";
import { useDispatch } from "react-redux";
import { updateUserReactions } from "../../redux/usersSlice";

const emojiObj = {
  like: "👍",
  dislike: "👎",
  heart: "❤️",
};

const UserView = ({ name, lastName, reactions }) => {
  const dispatch = useDispatch();
  const renderEmojies = Object.entries(emojiObj).map(([emojiName, value]) => (
    <button
      key={emojiName}
      onClick={() => dispatch(updateUserReactions({ name, emojiName }))}
    >
      {" "}
      {value} {reactions[emojiName]}
    </button>
  ));

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: "60%",
          margin: "1px auto",
          paddingBottom: "4px",
        }}
      >
        <p>
          {name} {lastName}
        </p>
        {renderEmojies}
      </div>
    </>
  );
};

export default UserView;
