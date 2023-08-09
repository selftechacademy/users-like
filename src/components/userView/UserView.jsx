import React from "react";

const emojiObj = {
  like: "👍",
  dislike: "👎",
  heart: "❤️",
};

const UserView = ({ name, lastName, reactions, updateUserReactions }) => {
  const renderEmojies = Object.entries(emojiObj).map(([key, value]) => (
    <button key={key} onClick={() => updateUserReactions(name, key)}>
      {" "}
      {value} {reactions[key]}
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
