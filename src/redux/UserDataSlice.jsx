import { createSlice, current } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
let initialState = [
  {
    name: "Sample User",
    info: [
      {
        title: "Work",
        timeframes: {
          daily: {
            current: 5,
            previous: 7,
          },
          weekly: {
            current: 32,
            previous: 36,
          },
          monthly: {
            current: 103,
            previous: 128,
          },
        },
      },
      {
        title: "Play",
        timeframes: {
          daily: {
            current: 1,
            previous: 2,
          },
          weekly: {
            current: 10,
            previous: 8,
          },
          monthly: {
            current: 23,
            previous: 29,
          },
        },
      },
      {
        title: "Study",
        timeframes: {
          daily: {
            current: 3,
            previous: 5,
          },
          weekly: {
            current: 4,
            previous: 7,
          },
          monthly: {
            current: 13,
            previous: 19,
          },
        },
      },
      {
        title: "Exercise",
        timeframes: {
          daily: {
            current: 1,
            previous: 1,
          },
          weekly: {
            current: 4,
            previous: 5,
          },
          monthly: {
            current: 11,
            previous: 18,
          },
        },
      },
      {
        title: "Social",
        timeframes: {
          daily: {
            current: 1,
            previous: 3,
          },
          weekly: {
            current: 5,
            previous: 10,
          },
          monthly: {
            current: 21,
            previous: 23,
          },
        },
      },
      {
        title: "Selfcare",
        timeframes: {
          daily: {
            current: 1,
            previous: 2,
          },
          weekly: {
            current: 2,
            previous: 2,
          },
          monthly: {
            current: 7,
            previous: 11,
          },
        },
      },
    ],
    id: "100",
  },
];
// let initialState = [];
export const UserDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
      toast.success("User created");
    },
    setUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.findIndex((i) => i.id === updatedUser.id);
      if (index >= 0) {
        state[index] = updatedUser;
        toast.success("User updated");
      }
    },
    deleteUser: (state, action) => {
      const updatedData = state.filter((i) => i.id !== action.payload);
      return updatedData;
    },
  },
});
export const { createUser, setUser, updateUser, deleteUser } =
  UserDataSlice.actions;
export default UserDataSlice.reducer;
