import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOKEN_ID } from '@utils/constants';

type UserData = {
    email: string;
    password: string;
    confirmPassword: string;
    accessToken: string;
};

type UserValues = Pick<UserData, 'email' | 'password' | 'confirmPassword'>;

const initialState: UserData = {
    email: '',
    password: '',
    confirmPassword: '',
    accessToken: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, { payload }: PayloadAction<UserValues>) => {
            (state.email = payload.email),
                (state.password = payload.password),
                (state.confirmPassword = payload.confirmPassword);
        },
        setAccessTokenToLocalStorage: (state, { payload }: PayloadAction<string>) => {
            state.accessToken = payload;
            localStorage.setItem(TOKEN_ID, payload);
        },
        setAccessTokenToSessionlStorage: (state, { payload }: PayloadAction<string>) => {
            state.accessToken = payload;
            sessionStorage.setItem(TOKEN_ID, payload);
        },
        logout: (state) => {
            state.accessToken = '';
            sessionStorage.setItem(TOKEN_ID, '');
            localStorage.setItem(TOKEN_ID, '');
        },
    },
});

export const {
    setUserData,
    setAccessTokenToLocalStorage,
    setAccessTokenToSessionlStorage,
    logout,
} = userSlice.actions;
export default userSlice.reducer;
