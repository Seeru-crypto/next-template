import {useEffect} from 'react';
import {useToastStore} from "@/zustand/store";


const useToast = (messageApi): void => {
    const {variant, message : toastMessage } = useToastStore((state) => state)

    // useEffect(() => {
    //     console.log("in toast with ", toastMessage)
    //     if (toastMessage === '') return
    //     switch (variant) {
    //         case 'success':
    //             messageApi.success(toastMessage)
    //             break
    //         case 'error':
    //             messageApi.error(toastMessage)
    //             break
    //         case 'warning':
    //             messageApi.warning(toastMessage)
    //             break
    //     }
    // }, [toastMessage])
};

export default useToast;
