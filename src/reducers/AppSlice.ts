import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ToastMessage {
    header: string;
    variant: 'warning' | 'success' | 'error';
}

export const initialToastMessage: ToastMessage = {
    header: '',
    variant: 'warning',
};

export type PlannerPageTypes =
    | 'ProductLanding'
    | 'ProductDetail'
    | 'StationLanding'
    | 'StationDetail'
    | 'Setting'
    | undefined
    | 'OrderLanding'
    | 'OrderSettings';
export type ManagerPageTypes = 'OrderLanding' | 'OrderSettings' | undefined;
export type PageTypes = PlannerPageTypes | ManagerPageTypes;

interface AppState {
    currentPage: PageTypes;
    headerLabel?: string;
}

const initialState: AppState = {
    currentPage: undefined,
    headerLabel: 'FANCY TITLE',
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<PageTypes>) => {
            state.currentPage = action.payload;
        },
        setHeaderLabel: (state, action: PayloadAction<string>) => {
            // state.headerLabel = action.payload;
        },
    },
});

export const { setCurrentPage, setHeaderLabel } = appSlice.actions;

export default appSlice.reducer;
