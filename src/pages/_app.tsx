import type {AppProps} from 'next/app'
import {ThemeProvider} from "styled-components";
import {DayTheme, NightTheme} from "../styles/theme";
import {useEffect, useState} from "react";
import Layout from "../components/layout/Layout";

export default function App({Component, pageProps}: AppProps) {
    const [isNightTheme, setIsNightTheme] = useState(false);
    const toggleTheme = () => {
        setIsNightTheme((prevTheme) => !prevTheme);
    };

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "night") {
            setIsNightTheme(true);
        }
    }, []);

    return (
        <ThemeProvider theme={isNightTheme ? NightTheme : DayTheme}>
            <Layout>
                <Component {...pageProps} toggleTheme={toggleTheme}/>
            </Layout>
        </ThemeProvider>
    )
}
