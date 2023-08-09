import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [
    {
      name: "Christopher",
      lastName: "Nolan",
      reactions: {
        like: 0,
        dislike: 0,
        heart: 0,
      },
    },
  ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsersList: (state, action) => {
      state.usersList.push(action.payload);
    },
    updateUserReactions: (state, action) => {
      const { name, emojiName } = action.payload;
      const updatedUsers = state.usersList.map((el) => {
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
      state.usersList = updatedUsers;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUsersList, updateUserReactions } = usersSlice.actions;

export default usersSlice.reducer;
