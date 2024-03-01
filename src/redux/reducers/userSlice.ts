import { PayloadAction, createSlice } from '@reduxjs/toolkit';



type UserData = {
  UserData: {
    email: string;
    password: string;
  }
}


const initialState: UserData = {
  UserData: {
    email: '',
    password: '',
  },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<{email:string, password:string }>) => {
        state.UserData = action.payload;
      },
    },
    
  });

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;