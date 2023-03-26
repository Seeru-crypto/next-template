import type {AppProps} from 'next/app'
import {ThemeProvider} from "styled-components";
import {DayTheme, NightTheme} from "../styles/theme";
import {useEffect, useState} from "react";
import Layout from "../components/layout/Layout";
import LoadingOverlay from "../views/LoadingOverlay";

export default function App({Component, pageProps}: AppProps) {
    const [isNightTheme, setIsNightTheme] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const toggleTheme = () => {
        setIsNightTheme((prevTheme) => !prevTheme);
    };

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "night") {
            setIsNightTheme(true);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the timeout duration as needed

    }, []);

    return (
        <>
            <ThemeProvider theme={isNightTheme ? NightTheme : DayTheme}>
                <Layout>
                    {isLoading ? <LoadingOverlay /> : <Component {...pageProps} toggleTheme={toggleTheme}/>}
                </Layout>
            </ThemeProvider>
        </>
    )
}
