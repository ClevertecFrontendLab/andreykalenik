import { PayloadAction, createSlice } from '@reduxjs/toolkit';


type UserData = {
    email: string
    password: string
    passwordConfirmed: string
    accessToken: string
}

type UserValues = Pick<UserData, 'email' | 'password' | 'passwordConfirmed'>;

const initialState: UserData = {
    email: '',
    password: '',
    passwordConfirmed: '',
    accessToken: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserData: (state, { payload }: PayloadAction<UserValues>) => {
        state.email = payload.email,
        state.password = payload.password,
        state.passwordConfirmed= payload.passwordConfirmed

      },
      setAccessToken: (state, { payload }: PayloadAction<string>) => {
        state.accessToken = payload;
    },
    },
    
  });

export const {setUserData, setAccessToken} = userSlice.actions;
export default userSlice.reducer;