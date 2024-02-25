import { PayloadAction, createSlice } from '@reduxjs/toolkit';



type UserData = {
    email: string;
    password: string;
}


const initialState: UserData = {
      email: '',
      password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<UserData>) => {
        state = action.payload;
      },
    },
    
  });

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;