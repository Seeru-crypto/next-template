import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        authUser: authReducer
    },
    // ? show the devTools only in development
    devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
