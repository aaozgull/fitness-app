// userInfoSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfoData: null,
  gender: "",
  age: 0,
  weight: 0,
  height: 0,
  goal: "",
  fitnessLevel: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setGoal: (state, action) => {
      state.goal = action.payload;
    },
    setFitnessLevel: (state, action) => {
      state.fitnessLevel = action.payload;
    },
    updateLoggedInUserInfoData: (state, action) => {
      state.userInfoData = {
        ...state.userInfoData,
        ...action.payload.newInfoData,
      };
    },
  },
});

export const {
  setGender,
  setAge,
  setWeight,
  setHeight,
  setGoal,
  setFitnessLevel,
} = userInfoSlice.actions;
export const updateLoggedInUserInfoData =
  userInfoSlice.actions.updateLoggedInUserInfoData;
export default userInfoSlice.reducer;
