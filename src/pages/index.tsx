import {useState} from "react";
import PrivateLanding from "../views/PrivateLanding";
import PublicLanding from "../views/PublicLanding";
import Button from "../components/Button";


interface HomeProps {
    toggleTheme: () => void;
}

export default function Home({toggleTheme} : HomeProps) : JSX.Element {
    const [auth, setAuth] = useState(false);

    if (auth) {
        return <PrivateLanding/>
    }
    else {
        return <>
            <PublicLanding/>
            </>
    }
}


