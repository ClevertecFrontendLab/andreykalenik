import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { NewFeedback } from './feedbackApi';


const initialState:NewFeedback = {
  rating: 0,
  message:'',

};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
      setRating: ( state, action: PayloadAction<0|1|2|3|4|5> ) => {
        state.rating = action.payload;
      },
      setMessage: ( state, action: PayloadAction<string> ) => {
        state.message = action.payload;
      },

    },
    
  });

export const { setRating, setMessage } = feedbackSlice.actions;
export default feedbackSlice.reducer;