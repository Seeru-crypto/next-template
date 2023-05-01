import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
    _id: string;
    name: string;
    email: string;
    photo: string;
    role: string;
    provider?: string;
    active?: boolean;
    verified?: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
}

interface AuthState {
    user: IUser | null;
}

const initialState: AuthState = {
    user: null,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout: () => initialState,
        userInfo: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },
    },
});

export const { logout, userInfo } = authSlice.actions;
export default authSlice.reducer;

