import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
    },
  },
  reducers: {
    setUserDetails: (state, action) => {
      const { name, age, email, photo } = action?.payload?.user;
      state.user.name = name;
      state.user.age = age;
      state.user.email = email;
      state.user.photo = photo;
    },

    logoutAndRemoveUserDetails: (state, action) => {
      state.user = {};
    },
  },
});

export const { setUserDetails, logoutAndRemoveUserDetails } = userSlice.actions;
export default userSlice.reducer;
