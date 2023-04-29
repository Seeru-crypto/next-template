import { useEffect } from 'react';
import { Alert } from 'antd';
import {ToastMessage} from "@/reducers/AppSlice";
import {useAppDispatch, useAppSelector} from "@/store";

const useToast = (): void => {
    const appToast = useAppSelector((state) => state.app.toast);
    const dispatch = useAppDispatch();

    const generalToastOptions: ToastOptions = {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        draggable: false,
    };

    useEffect(() => {
        function toastCaller(toastMessage: ToastMessage): void {
            switch (toastMessage.variant) {
                case 'warning':
                    toast.warning(toastMessage.header, generalToastOptions);
                    break;
                case 'success':
                    toast.success(toastMessage.header, generalToastOptions);
                    break;
                case 'error':
                    toast.error(toastMessage.header, generalToastOptions);
                    break;
            }
        }
        if (productToast.header !== '') toastCaller(productToast);
        if (stationToast.header !== '') toastCaller(stationToast);
        if (settingToast.header !== '') toastCaller(settingToast);
        if (orderToast.header !== '') toastCaller(orderToast);

        return () => {
            dispatch(resetProductToast());
            dispatch(resetSettingToast());
            dispatch(resetStationToast());
            dispatch(resetOrderToast());
        };
    }, [productToast.header, stationToast.header, settingToast.header, orderToast.header]);
};

export default useToast;
