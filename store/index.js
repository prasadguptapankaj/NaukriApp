// store/index.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import the counterSlice reducer
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
    // Add more reducers here if needed
  },
});

export default store;
