import type {AppProps} from 'next/app'
import {ThemeProvider} from "styled-components";
import {DayTheme, NightTheme} from "../styles/theme";
import {useEffect, useState} from "react";
import Layout from "../components/layout/Layout";
import {SessionProvider} from "next-auth/react"

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
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
        <SessionProvider session={session}>
            <ThemeProvider theme={isNightTheme ? NightTheme : DayTheme}>
                <Layout>
                    <Component {...pageProps} toggleTheme={toggleTheme}/>
                </Layout>
            </ThemeProvider>
        </SessionProvider>

    )
}
