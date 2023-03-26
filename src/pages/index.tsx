import {useState} from "react";
import PrivateLanding from "../views/PrivateLanding";
import PublicLanding from "../views/PublicLanding";


interface HomeProps {
    toggleTheme: () => void;
}

export default function Home({toggleTheme} : HomeProps) : JSX.Element {
    const [auth, setAuth] = useState(false);

    if (auth) {
        return <PrivateLanding/>
    }
    else {
        return <PublicLanding/>
    }
}


