import type {AppProps} from 'next/app'
import {ThemeProvider} from "styled-components";
import {dayTheme, nightTheme} from "../styles/theme";
import {GlobalStyle} from "../styles/GlobalStyle";
import {useState} from "react";

export default function App({Component, pageProps}: AppProps) {
    const [isNightTheme, setIsNightTheme] = useState(false);
    const toggleTheme = () => {
        setIsNightTheme((prevTheme) => !prevTheme);
    };

    return (
        <>
            <ThemeProvider theme={isNightTheme ? nightTheme : dayTheme}>
                <GlobalStyle/>
                <Component {...pageProps} toggleTheme={toggleTheme}/>
            </ThemeProvider>
        </>
    )
}
