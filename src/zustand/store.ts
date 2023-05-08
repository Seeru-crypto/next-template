import {create} from 'zustand'

interface StoreInterface {
    count: number
    increment: (qty: number) => void
    decrement: (qty: number) => void
    setCount: (qty: number) => void
}

export const useCountStore = create<StoreInterface>((set) => ({
    count: 0,
    increment: (qty: number) => set((state) => ({count: state.count + qty})),
    decrement: (qty: number) => set((state) => ({count: state.count - qty})),
    setCount: (qty: number) => set(() => ({count: qty}))
}))

export interface AuthProps {
    name: string,
    isAuthenticated: boolean,
    jwt: string | null,
}

const defaultAuth: AuthProps = {
    name: '',
    isAuthenticated: false,
    jwt: null,
}

type ToastVariant = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
    variant: ToastVariant
    message: string
}

const defaultToast: ToastProps = {
    variant: 'info',
    message: '',
}

interface AppState {
    auth: AuthProps,
    setAuth: (auth: AuthProps) => void
    toast: ToastProps,
    setToast: (toast: ToastProps) => void
}

export const useAppStore = create<AppState>((set) => ({
    auth: defaultAuth,
    setAuth: (auth: AuthProps) => set(() => ({auth: auth})),
    toast: defaultToast,
    setToast: (toast: ToastProps) => set(() => ({toast: toast}))
}))


// interface AuthProps {
//     name: string
//     isAuthenticated: boolean
//     setName: (name: string) => void
//     setIsAuthenticated: (isAuthenticated: boolean) => void
// }
//
// export const useAuthStore = create<AuthProps>((set) => ({
//     name: 0,
//     setName: (name: string) => set(() => ({name: name})),
//     isAuthenticated: false,
//     setIsAuthenticated: (isAuthenticated: boolean) => set(() => ({isAuthenticated: isAuthenticated}))
// }))


