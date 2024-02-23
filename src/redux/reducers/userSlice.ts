import { PayloadAction, createSlice } from '@reduxjs/toolkit';



type UserState = {
    email: string;
    password: string;
}

export interface IUserData {
  email: string,
  password: string,
}


const initialState: UserState = {
      email: '',
      password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<IUserData>) => {
        state = action.payload;
      },
    },
    
  });

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;